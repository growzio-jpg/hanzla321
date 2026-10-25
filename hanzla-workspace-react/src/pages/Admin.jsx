import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { sb, BUCKET } from "../supabase";
import { PAGES, reloadSite } from "../store";
import { fixUrl, dlUrl } from "../util";
import "./admin.css";

const CATS = ["UGC ad", "Web development", "SEO"];
const PAGE_LABEL = {
  home: "Home",
  ugc: "UGC page",
  web: "Web page",
  seo: "SEO page",
  about: "About",
  contact: "Contact",
  portfolio: "Portfolio",
};
const blank = () => ({
  title: "",
  category: "Web development",
  description: "",
  metric: "",
  link_url: "",
  link_label: "Open live site",
  image_url: "",
  show_on: ["portfolio"],
  published: true,
});

const storagePath = (url) => {
  const m = (url || "").split(`/object/public/${BUCKET}/`)[1];
  return m ? decodeURIComponent(m) : null;
};

export default function Admin() {
  const [session, setSession] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(null);
  useEffect(() => {
    document.title = "Admin | Hanzla Workspace";
    let m = document.querySelector("meta[name=robots]");
    const old = m?.content;
    if (m) m.content = "noindex, nofollow";
    sb.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = sb.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => {
      data.subscription.unsubscribe();
      if (m && old) m.content = old;
    };
  }, []);
  useEffect(() => {
    if (!session) return setIsAdmin(null);
    sb.rpc("is_admin").then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  if (session === undefined) return <div className="adm-c">Loading…</div>;
  if (!session) return <Login />;
  if (isAdmin === null) return <div className="adm-c">Checking access…</div>;
  if (!isAdmin)
    return (
      <div className="adm-c">
        <div className="adm-box">
          <h2>No access</h2>
          <p>{session.user.email} is not an admin of this site.</p>
          <button className="ab" onClick={() => sb.auth.signOut()}>
            Sign out
          </button>
        </div>
      </div>
    );
  return <Dashboard user={session.user} />;
}

function Login() {
  const [e, setE] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const go = async (ev) => {
    ev.preventDefault();
    setBusy(true);
    setErr("");
    const { error } = await sb.auth.signInWithPassword({ email: e.trim(), password: p });
    if (error) setErr(error.message);
    setBusy(false);
  };
  return (
    <div className="adm-c">
      <form className="adm-box" onSubmit={go}>
        <h2>Admin login</h2>
        <p className="mut">Hanzla Workspace dashboard</p>
        <label>Email</label>
        <input type="email" required value={e} onChange={(x) => setE(x.target.value)} />
        <label>Password</label>
        <input type="password" required value={p} onChange={(x) => setP(x.target.value)} />
        {err && <p className="err">{err}</p>}
        <button className="ab pr" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
        <a href="#home" className="mut sm">
          ← Back to website
        </a>
      </form>
    </div>
  );
}

function Dashboard({ user }) {
  const [tab, setTab] = useState("projects");
  const [toast, setToast] = useState("");
  const flash = useCallback((t) => {
    setToast(t);
    setTimeout(() => setToast(""), 2600);
  }, []);
  return (
    <div className="adm">
      <header className="adm-h">
        <b>Hanzla Workspace · Admin</b>
        <nav>
          {[
            ["projects", "Projects"],
            ["certs", "Certificates"],
            ["leads", "Messages"],
            ["settings", "Settings"],
          ].map(([k, t]) => (
            <button key={k} className={tab === k ? "on" : ""} onClick={() => setTab(k)}>
              {t}
            </button>
          ))}
        </nav>
        <span className="sp" />
        <a href="#home" className="ab">
          View site
        </a>
        <button className="ab" onClick={() => sb.auth.signOut()} title={user.email}>
          Sign out
        </button>
      </header>
      <main className="adm-m">
        {tab === "projects" && <Projects flash={flash} />}
        {tab === "certs" && <Certs flash={flash} />}
        {tab === "leads" && <Leads flash={flash} />}
        {tab === "settings" && <Settings flash={flash} />}
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

/* ---------------- Projects ---------------- */
function Projects({ flash }) {
  const [rows, setRows] = useState([]);
  const [edit, setEdit] = useState(null);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const { data, error } = await sb
      .from("projects")
      .select("*")
      .order("sort_order")
      .order("created_at");
    if (error) flash(error.message);
    else setRows(data);
    setLoading(false);
  }, [flash]);
  useEffect(() => {
    load();
  }, [load]);
  const sync = async () => {
    await load();
    reloadSite();
  };

  const shown = useMemo(
    () =>
      rows.filter(
        (r) =>
          (cat === "all" || r.category === cat) &&
          (r.title + r.description).toLowerCase().includes(q.toLowerCase()),
      ),
    [rows, q, cat],
  );

  const toggle = async (r) => {
    const { error } = await sb.from("projects").update({ published: !r.published }).eq("id", r.id);
    error ? flash(error.message) : flash(r.published ? "Hidden from website" : "Now visible on website");
    sync();
  };
  const del = async (r) => {
    if (!confirm(`Delete "${r.title}" permanently?`)) return;
    const { error } = await sb.from("projects").delete().eq("id", r.id);
    if (error) return flash(error.message);
    const path = storagePath(r.image_url);
    if (path) sb.storage.from(BUCKET).remove([path]);
    flash("Project deleted");
    sync();
  };
  const move = async (r, dir) => {
    const i = rows.findIndex((x) => x.id === r.id);
    const j = i + dir;
    if (j < 0 || j >= rows.length) return;
    const next = [...rows];
    [next[i], next[j]] = [next[j], next[i]];
    const upd = next
      .map((x, n) => ({ id: x.id, sort_order: (n + 1) * 10, old: x.sort_order }))
      .filter((x) => x.sort_order !== x.old);
    setRows(next);
    await Promise.all(upd.map((x) => sb.from("projects").update({ sort_order: x.sort_order }).eq("id", x.id)));
    sync();
  };

  return (
    <>
      <div className="bar">
        <h1>Projects</h1>
        <span className="mut">{rows.length} total</span>
        <span className="sp" />
        <button className="ab pr" onClick={() => setEdit(blank())}>
          + Add project
        </button>
      </div>
      <div className="bar">
        <input
          className="srch"
          placeholder="Search projects…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="all">All categories</option>
          {CATS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      {loading && <p className="mut">Loading…</p>}
      <div className="plist">
        {shown.map((r) => (
          <div key={r.id} className={"prow" + (r.published ? "" : " off")}>
            <div className="pth">
              {r.image_url ? <img src={r.image_url} alt="" /> : <span>No image</span>}
            </div>
            <div className="pbody">
              <b>{r.title}</b>
              <div className="mut sm">
                {r.category} · {r.metric || "no metric"} ·{" "}
                {r.published ? "Visible" : "Hidden"}
              </div>
              <div className="sm trunc">
                {r.link_url ? (
                  <a href={fixUrl(r.link_url)} target="_blank" rel="noopener noreferrer">
                    {r.link_url} ↗
                  </a>
                ) : (
                  <span className="mut">no link</span>
                )}
              </div>
              <div className="chips">
                {(r.show_on || []).map((p) => (
                  <i key={p}>{PAGE_LABEL[p] || p}</i>
                ))}
              </div>
            </div>
            <div className="pact">
              <button className="ab" onClick={() => move(r, -1)} title="Move up" disabled={cat !== "all" || q}>
                ↑
              </button>
              <button className="ab" onClick={() => move(r, 1)} title="Move down" disabled={cat !== "all" || q}>
                ↓
              </button>
              <button className="ab" onClick={() => setEdit(r)}>
                Edit
              </button>
              <button className="ab" onClick={() => toggle(r)}>
                {r.published ? "Hide" : "Show"}
              </button>
              <button className="ab dg" onClick={() => del(r)}>
                Delete
              </button>
            </div>
          </div>
        ))}
        {!loading && !shown.length && <p className="mut">No projects found.</p>}
      </div>
      {edit && (
        <Editor
          initial={edit}
          flash={flash}
          nextOrder={(rows.at(-1)?.sort_order || 0) + 10}
          onClose={() => setEdit(null)}
          onSaved={() => {
            setEdit(null);
            sync();
          }}
        />
      )}
    </>
  );
}

function Editor({ initial, flash, onClose, onSaved, nextOrder }) {
  const [f, setF] = useState({ ...initial, image_url: initial.image_url || "" });
  const [busy, setBusy] = useState(false);
  const [up, setUp] = useState(false);
  const fileRef = useRef();
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const togglePage = (p) =>
    setF({
      ...f,
      show_on: f.show_on.includes(p) ? f.show_on.filter((x) => x !== p) : [...f.show_on, p],
    });

  const upload = async (file) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) return flash("Image must be under 5 MB");
    setUp(true);
    const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const path = `${Date.now()}-${safe}`;
    const { error } = await sb.storage.from(BUCKET).upload(path, file, {
      contentType: file.type,
      cacheControl: "31536000",
    });
    setUp(false);
    if (error) return flash(error.message);
    const { data } = sb.storage.from(BUCKET).getPublicUrl(path);
    setF((x) => ({ ...x, image_url: data.publicUrl }));
    flash("Image uploaded");
  };

  const save = async (e) => {
    e.preventDefault();
    setBusy(true);
    const row = {
      title: f.title.trim(),
      category: f.category,
      description: f.description.trim(),
      metric: f.metric.trim(),
      link_url: fixUrl(f.link_url),
      link_label: f.link_label.trim() || "View project",
      image_url: fixUrl(f.image_url) || null,
      show_on: f.show_on,
      published: f.published,
    };
    const res = f.id
      ? await sb.from("projects").update(row).eq("id", f.id)
      : await sb.from("projects").insert({ ...row, sort_order: nextOrder });
    setBusy(false);
    if (res.error) return flash(res.error.message);
    // remove the old uploaded file if the image was replaced or removed
    const oldPath = storagePath(initial.image_url);
    if (oldPath && initial.image_url !== row.image_url) sb.storage.from(BUCKET).remove([oldPath]);
    flash("Saved");
    onSaved();
  };

  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form className="mbox" onSubmit={save}>
        <div className="bar">
          <h2>{f.id ? "Edit project" : "New project"}</h2>
          <span className="sp" />
          <button type="button" className="ab" onClick={onClose}>
            ✕
          </button>
        </div>
        <label>Title</label>
        <input required maxLength={160} value={f.title} onChange={set("title")} />
        <div className="two">
          <div>
            <label>Category</label>
            <select value={f.category} onChange={set("category")}>
              {CATS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Badge text (e.g. 3.8x ROAS)</label>
            <input maxLength={80} value={f.metric} onChange={set("metric")} />
          </div>
        </div>
        <label>Description</label>
        <textarea rows={3} maxLength={600} value={f.description} onChange={set("description")} />
        <div className="two">
          <div>
            <label>Project link</label>
            <input
              placeholder="https://… (opens in a new tab)"
              value={f.link_url}
              onChange={set("link_url")}
            />
          </div>
          <div>
            <label>Link button text</label>
            <input maxLength={80} value={f.link_label} onChange={set("link_label")} />
          </div>
        </div>
        <label>Image</label>
        <div className="imgbox">
          <div className="pth big">
            {f.image_url ? <img src={f.image_url} alt="" /> : <span>No image (default illustration is used)</span>}
          </div>
          <div className="imgctl">
            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif,image/avif"
              hidden
              onChange={(e) => upload(e.target.files[0])}
            />
            <button type="button" className="ab" disabled={up} onClick={() => fileRef.current.click()}>
              {up ? "Uploading…" : "Upload image"}
            </button>
            <input
              placeholder="…or paste an image link"
              value={f.image_url}
              onChange={set("image_url")}
            />
            {f.image_url && (
              <button type="button" className="ab dg" onClick={() => setF({ ...f, image_url: "" })}>
                Remove image
              </button>
            )}
          </div>
        </div>
        <label>Show on pages</label>
        <div className="checks">
          {PAGES.map((p) => (
            <label key={p} className="ck">
              <input type="checkbox" checked={f.show_on.includes(p)} onChange={() => togglePage(p)} />
              {PAGE_LABEL[p]}
            </label>
          ))}
        </div>
        <label className="ck">
          <input
            type="checkbox"
            checked={f.published}
            onChange={(e) => setF({ ...f, published: e.target.checked })}
          />
          Visible on website
        </label>
        <div className="bar">
          <span className="sp" />
          <button type="button" className="ab" onClick={onClose}>
            Cancel
          </button>
          <button className="ab pr" disabled={busy || up}>
            {busy ? "Saving…" : "Save project"}
          </button>
        </div>
      </form>
    </div>
  );
}

/* ---------------- Messages ---------------- */
function Leads({ flash }) {
  const [rows, setRows] = useState([]);
  const load = useCallback(async () => {
    const { data, error } = await sb.from("leads").select("*").order("created_at", { ascending: false });
    error ? flash(error.message) : setRows(data);
  }, [flash]);
  useEffect(() => {
    load();
  }, [load]);
  const read = async (r) => {
    await sb.from("leads").update({ is_read: !r.is_read }).eq("id", r.id);
    load();
  };
  const del = async (r) => {
    if (!confirm("Delete this message?")) return;
    await sb.from("leads").delete().eq("id", r.id);
    load();
  };
  const csv = () => {
    const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const out = [["Date", "Name", "Email", "Service", "Message"]]
      .concat(rows.map((r) => [r.created_at, r.name, r.email, r.service, r.message]))
      .map((r) => r.map(esc).join(","))
      .join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([out], { type: "text/csv" }));
    a.download = "messages.csv";
    a.click();
  };
  return (
    <>
      <div className="bar">
        <h1>Messages</h1>
        <span className="mut">
          {rows.filter((r) => !r.is_read).length} unread / {rows.length}
        </span>
        <span className="sp" />
        <button className="ab" onClick={csv} disabled={!rows.length}>
          Export CSV
        </button>
      </div>
      <div className="plist">
        {rows.map((r) => (
          <div key={r.id} className={"lrow" + (r.is_read ? "" : " un")}>
            <div>
              <b>{r.name}</b> <span className="mut sm">· {r.service} · {new Date(r.created_at).toLocaleString()}</span>
              <div className="sm">
                <a href={"mailto:" + r.email}>{r.email}</a>
              </div>
              <p>{r.message}</p>
            </div>
            <div className="pact">
              <a className="ab" href={"mailto:" + r.email}>
                Reply
              </a>
              <button className="ab" onClick={() => read(r)}>
                {r.is_read ? "Mark unread" : "Mark read"}
              </button>
              <button className="ab dg" onClick={() => del(r)}>
                Delete
              </button>
            </div>
          </div>
        ))}
        {!rows.length && <p className="mut">No messages yet. Contact form submissions appear here.</p>}
      </div>
    </>
  );
}

/* ---------------- Settings ---------------- */
function Settings({ flash }) {
  const [s, setS] = useState({ wa_link: "", wa_number: "" });
  const [pw, setPw] = useState("");
  const [resume, setResume] = useState("");
  const [upl, setUpl] = useState(false);
  const loadResume = () =>
    sb.from("site_settings").select("value").eq("key", "resume_url").maybeSingle()
      .then(({ data }) => setResume(data?.value || ""));
  const saveResume = async (url, old) => {
    const { error } = await sb
      .from("site_settings")
      .upsert({ key: "resume_url", value: url, label: "Resume (PDF upload or Drive link)", updated_at: new Date().toISOString() });
    if (error) return flash(error.message);
    const oldPath = (old || "").split("/object/public/documents/")[1];
    if (oldPath && old !== url) sb.storage.from("documents").remove([decodeURIComponent(oldPath)]);
    setResume(url);
    flash(url ? "Resume saved" : "Resume removed");
    reloadSite();
  };
  const uploadPdf = async (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") return flash("Please choose a PDF file");
    if (file.size > 10 * 1024 * 1024) return flash("PDF must be under 10 MB");
    setUpl(true);
    const path = `resume-${Date.now()}.pdf`;
    const { error } = await sb.storage.from("documents").upload(path, file, { contentType: "application/pdf" });
    setUpl(false);
    if (error) return flash(error.message);
    const { data } = sb.storage.from("documents").getPublicUrl(path);
    await saveResume(data.publicUrl, resume);
  };
  useEffect(() => {
    loadResume();
    sb.from("site_settings")
      .select("key,value")
      .then(({ data }) => data && setS((x) => ({ ...x, ...Object.fromEntries(data.map((r) => [r.key, r.value])) })));
  }, []);
  const save = async (e) => {
    e.preventDefault();
    const rows = [
      { key: "wa_link", value: s.wa_link.trim(), label: "WhatsApp chat button link" },
      {
        key: "wa_number",
        value: s.wa_number.replace(/\D/g, ""),
        label: "WhatsApp number for contact form",
      },
    ].map((r) => ({ ...r, updated_at: new Date().toISOString() }));
    const { error } = await sb.from("site_settings").upsert(rows);
    error ? flash(error.message) : flash("Settings saved");
    reloadSite();
  };
  const chPw = async (e) => {
    e.preventDefault();
    const { error } = await sb.auth.updateUser({ password: pw });
    error ? flash(error.message) : (flash("Password changed"), setPw(""));
  };
  return (
    <>
      <div className="bar">
        <h1>Settings</h1>
      </div>
      <form className="adm-box wide" onSubmit={save}>
        <h3>WhatsApp</h3>
        <label>Floating chat button link</label>
        <input value={s.wa_link} onChange={(e) => setS({ ...s, wa_link: e.target.value })} />
        <label>Number used by contact form (digits, with country code)</label>
        <input value={s.wa_number} onChange={(e) => setS({ ...s, wa_number: e.target.value })} />
        <button className="ab pr">Save settings</button>
      </form>
      <div className="adm-box wide">
        <h3>Resume (Download resume button)</h3>
        <p className="mut sm">
          Upload a PDF, or paste a Google Drive / any link. The About page button uses this.
        </p>
        <input
          type="file"
          accept="application/pdf"
          id="pdfup"
          hidden
          onChange={(e) => uploadPdf(e.target.files[0])}
        />
        <button type="button" className="ab" disabled={upl} onClick={() => document.getElementById("pdfup").click()}>
          {upl ? "Uploading…" : "Upload resume PDF"}
        </button>
        <label>…or resume link (Drive etc.)</label>
        <input value={resume} onChange={(e) => setResume(e.target.value)} placeholder="https://drive.google.com/…" />
        <div className="bar" style={{ marginBottom: 0 }}>
          <button type="button" className="ab pr" onClick={() => saveResume(fixUrl(resume), resume)}>
            Save link
          </button>
          {resume && (
            <>
              <a className="ab" href={dlUrl(resume)} target="_blank" rel="noopener noreferrer">
                Test download ↗
              </a>
              <button type="button" className="ab dg" onClick={() => confirm("Remove resume?") && saveResume("", resume)}>
                Remove
              </button>
            </>
          )}
        </div>
      </div>
      <form className="adm-box wide" onSubmit={chPw}>
        <h3>Change password</h3>
        <input type="password" minLength={8} required placeholder="New password (8+ characters)" value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className="ab">Update password</button>
      </form>
    </>
  );
}

/* ---------------- Certificates ---------------- */
const blankCert = () => ({
  title: "",
  issuer: "",
  issue_date: "",
  credential_id: "",
  description: "",
  image_url: "",
  link_url: "",
  link_label: "View certificate",
  published: true,
});
function Certs({ flash }) {
  const [rows, setRows] = useState([]);
  const [edit, setEdit] = useState(null);
  const load = useCallback(async () => {
    const { data, error } = await sb.from("certificates").select("*").order("sort_order").order("created_at");
    error ? flash(error.message) : setRows(data);
  }, [flash]);
  useEffect(() => {
    load();
  }, [load]);
  const sync = async () => {
    await load();
    reloadSite();
  };
  const toggle = async (r) => {
    await sb.from("certificates").update({ published: !r.published }).eq("id", r.id);
    sync();
  };
  const del = async (r) => {
    if (!confirm(`Delete "${r.title}"?`)) return;
    const { error } = await sb.from("certificates").delete().eq("id", r.id);
    if (error) return flash(error.message);
    const path = storagePath(r.image_url);
    if (path) sb.storage.from(BUCKET).remove([path]);
    flash("Certificate deleted");
    sync();
  };
  const move = async (r, dir) => {
    const i = rows.findIndex((x) => x.id === r.id);
    const j = i + dir;
    if (j < 0 || j >= rows.length) return;
    const next = [...rows];
    [next[i], next[j]] = [next[j], next[i]];
    setRows(next);
    await Promise.all(
      next.map((x, n) =>
        x.sort_order !== (n + 1) * 10 ? sb.from("certificates").update({ sort_order: (n + 1) * 10 }).eq("id", x.id) : null,
      ),
    );
    sync();
  };
  return (
    <>
      <div className="bar">
        <h1>Certificates</h1>
        <span className="mut">{rows.length} total · shown on the About page</span>
        <span className="sp" />
        <button className="ab pr" onClick={() => setEdit(blankCert())}>
          + Add certificate
        </button>
      </div>
      <div className="plist">
        {rows.map((r) => (
          <div key={r.id} className={"prow" + (r.published ? "" : " off")}>
            <div className="pth">{r.image_url ? <img src={r.image_url} alt="" /> : <span>No image</span>}</div>
            <div className="pbody">
              <b>{r.title}</b>
              <div className="mut sm">
                {[r.issuer, r.issue_date].filter(Boolean).join(" · ") || "—"} · {r.published ? "Visible" : "Hidden"}
              </div>
              {r.link_url && (
                <div className="sm trunc">
                  <a href={fixUrl(r.link_url)} target="_blank" rel="noopener noreferrer">
                    {r.link_url} ↗
                  </a>
                </div>
              )}
            </div>
            <div className="pact">
              <button className="ab" onClick={() => move(r, -1)}>↑</button>
              <button className="ab" onClick={() => move(r, 1)}>↓</button>
              <button className="ab" onClick={() => setEdit(r)}>Edit</button>
              <button className="ab" onClick={() => toggle(r)}>{r.published ? "Hide" : "Show"}</button>
              <button className="ab dg" onClick={() => del(r)}>Delete</button>
            </div>
          </div>
        ))}
        {!rows.length && <p className="mut">No certificates yet. Click “Add certificate”.</p>}
      </div>
      {edit && (
        <CertEditor
          initial={edit}
          flash={flash}
          nextOrder={(rows.at(-1)?.sort_order || 0) + 10}
          onClose={() => setEdit(null)}
          onSaved={() => {
            setEdit(null);
            sync();
          }}
        />
      )}
    </>
  );
}
function CertEditor({ initial, flash, onClose, onSaved, nextOrder }) {
  const [f, setF] = useState({ ...initial, image_url: initial.image_url || "" });
  const [busy, setBusy] = useState(false);
  const [up, setUp] = useState(false);
  const fileRef = useRef();
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const upload = async (file) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) return flash("Image must be under 5 MB");
    setUp(true);
    const path = `cert-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
    const { error } = await sb.storage.from(BUCKET).upload(path, file, { contentType: file.type, cacheControl: "31536000" });
    setUp(false);
    if (error) return flash(error.message);
    setF((x) => ({ ...x, image_url: sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl }));
  };
  const save = async (e) => {
    e.preventDefault();
    setBusy(true);
    const row = {
      title: f.title.trim(),
      issuer: f.issuer.trim(),
      issue_date: f.issue_date.trim(),
      credential_id: f.credential_id.trim(),
      description: f.description.trim(),
      image_url: fixUrl(f.image_url) || null,
      link_url: fixUrl(f.link_url),
      link_label: f.link_label.trim() || "View certificate",
      published: f.published,
    };
    const res = f.id
      ? await sb.from("certificates").update(row).eq("id", f.id)
      : await sb.from("certificates").insert({ ...row, sort_order: nextOrder });
    setBusy(false);
    if (res.error) return flash(res.error.message);
    const oldPath = storagePath(initial.image_url);
    if (oldPath && initial.image_url !== row.image_url) sb.storage.from(BUCKET).remove([oldPath]);
    flash("Saved");
    onSaved();
  };
  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form className="mbox" onSubmit={save}>
        <div className="bar">
          <h2>{f.id ? "Edit certificate" : "New certificate"}</h2>
          <span className="sp" />
          <button type="button" className="ab" onClick={onClose}>✕</button>
        </div>
        <label>Certificate title</label>
        <input required maxLength={200} value={f.title} onChange={set("title")} />
        <div className="two">
          <div>
            <label>Issued by</label>
            <input maxLength={160} value={f.issuer} onChange={set("issuer")} placeholder="Google, Coursera, HubSpot…" />
          </div>
          <div>
            <label>Date</label>
            <input maxLength={40} value={f.issue_date} onChange={set("issue_date")} placeholder="March 2026" />
          </div>
        </div>
        <label>Credential ID (optional)</label>
        <input maxLength={120} value={f.credential_id} onChange={set("credential_id")} />
        <label>Details</label>
        <textarea rows={3} maxLength={800} value={f.description} onChange={set("description")} />
        <div className="two">
          <div>
            <label>Verify / view link</label>
            <input value={f.link_url} onChange={set("link_url")} placeholder="https://… (opens in new tab)" />
          </div>
          <div>
            <label>Link button text</label>
            <input maxLength={80} value={f.link_label} onChange={set("link_label")} />
          </div>
        </div>
        <label>Certificate image</label>
        <div className="imgbox">
          <div className="pth big">{f.image_url ? <img src={f.image_url} alt="" /> : <span>No image</span>}</div>
          <div className="imgctl">
            <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/avif" hidden onChange={(e) => upload(e.target.files[0])} />
            <button type="button" className="ab" disabled={up} onClick={() => fileRef.current.click()}>
              {up ? "Uploading…" : "Upload image"}
            </button>
            <input placeholder="…or paste an image link" value={f.image_url} onChange={set("image_url")} />
            {f.image_url && (
              <button type="button" className="ab dg" onClick={() => setF({ ...f, image_url: "" })}>
                Remove image
              </button>
            )}
          </div>
        </div>
        <label className="ck">
          <input type="checkbox" checked={f.published} onChange={(e) => setF({ ...f, published: e.target.checked })} />
          Visible on website
        </label>
        <div className="bar">
          <span className="sp" />
          <button type="button" className="ab" onClick={onClose}>Cancel</button>
          <button className="ab pr" disabled={busy || up}>{busy ? "Saving…" : "Save certificate"}</button>
        </div>
      </form>
    </div>
  );
}
