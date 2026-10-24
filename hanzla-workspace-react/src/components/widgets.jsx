import { useEffect, useRef, useState } from "react";
import { F, PT, FR } from "../data";
import { sb } from "../supabase";
import { fixUrl } from "../util";
import { useSite, forPage, thumbOf } from "../store";
export const Faq = ({ k }) => (
  <div className="faq">
    {F[k].map(([q, a]) => (
      <details key={q}>
        <summary>{q}</summary>
        <p>{a}</p>
      </details>
    ))}
  </div>
);
export function Count({ v }) {
  const r = useRef(null),
    [x, setX] = useState(v);
  useEffect(() => {
    const m = v.match(/^(\D*)([\d.]+)(\D*)$/);
    if (!m || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const to = parseFloat(m[2]),
      d = (m[2].split(".")[1] || "").length;
    let done = false,
      raf;
    const o = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting && !done) {
          done = true;
          o.disconnect();
          const t0 = performance.now();
          const f = (n) => {
            const k = Math.min((n - t0) / 1200, 1);
            setX(m[1] + (to * k).toFixed(d) + m[3]);
            if (k < 1) raf = requestAnimationFrame(f);
          };
          f(t0);
        }
      },
      { threshold: 0.5 },
    );
    o.observe(r.current);
    return () => {
      o.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [v]);
  return <b ref={r}>{x}</b>;
}
export function Calc() {
  const [t, setT] = useState(2500),
    [x, setX] = useState("1.5"),
    [d, setD] = useState("6");
  const f = () =>
      Math.round((parseFloat(t) || 0) * x * (d / 4)).toLocaleString(),
    [r, setR] = useState(f);
  return (
    <div className="calc">
      <div className="f">
        <div>
          <label htmlFor="ct">Current monthly organic visitors</label>
          <input
            type="number"
            id="ct"
            min="0"
            value={t}
            onChange={(e) => setT(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cs">Industry</label>
          <select id="cs" value={x} onChange={(e) => setX(e.target.value)}>
            <option value="1.5">E-commerce store</option>
            <option value="2.0">SaaS and technology</option>
            <option value="1.8">Local business or services</option>
          </select>
        </div>
        <div>
          <label htmlFor="cd">Campaign duration</label>
          <select id="cd" value={d} onChange={(e) => setD(e.target.value)}>
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
          </select>
        </div>
      </div>
      <button
        className="btn"
        style={{ width: "100%", justifyContent: "center" }}
        onClick={() => setR(f())}
      >
        Calculate estimated growth
      </button>
      <div className="res">
        <span>Estimated monthly traffic increase</span>
        <strong>+{r} visitors / month</strong>
      </div>
    </div>
  );
}
export function ContactForm() {
  const [f, setF] = useState({ n: "", e: "", s: "UGC video ads", m: "" }),
    [st, setSt] = useState("idle"),
    u = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = async (e) => {
    e.preventDefault();
    setSt("busy");
    const lead = { name: f.n.trim(), email: f.e.trim(), service: f.s, message: f.m.trim() };
    // 1) save in Supabase (visible in Admin > Messages)
    const saved = await sb.from("leads").insert(lead);
    // 2) email notification to the site owner
    let mailed = false;
    try {
      const r = await fetch("https://formsubmit.co/ajax/hanzlaworkspace@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New website message from ${lead.name}`,
          _replyto: lead.email,
          _template: "table",
          _captcha: "false",
          Name: lead.name,
          Email: lead.email,
          Service: lead.service,
          Message: lead.message,
        }),
      });
      mailed = r.ok;
    } catch (_) {}
    if (saved.error && !mailed) return setSt("error");
    setF({ n: "", e: "", s: "UGC video ads", m: "" });
    setSt("done");
  };
  if (st === "done")
    return (
      <div className="cform" role="status">
        <h3 style={{ fontSize: "1.4rem" }}>Message sent</h3>
        <p>Thank you! We received your message and will reply within 24 hours.</p>
        <button className="btn o" type="button" onClick={() => setSt("idle")}>
          Send another message
        </button>
      </div>
    );
  return (
    <form className="cform" onSubmit={send}>
      <h3 style={{ fontSize: "1.4rem" }}>Send a message</h3>
      <div>
        <label htmlFor="fn">Full name</label>
        <input id="fn" required maxLength={120} value={f.n} onChange={u("n")} />
      </div>
      <div>
        <label htmlFor="fe">Email</label>
        <input id="fe" type="email" required maxLength={200} value={f.e} onChange={u("e")} />
      </div>
      <div>
        <label htmlFor="fs">Service</label>
        <select id="fs" value={f.s} onChange={u("s")}>
          <option>UGC video ads</option>
          <option>Web development</option>
          <option>SEO, AEO and GEO</option>
          <option>Full package</option>
        </select>
      </div>
      <div>
        <label htmlFor="fm">Message</label>
        <textarea
          id="fm"
          placeholder="Your brand, goals and timeline"
          required
          maxLength={3000}
          value={f.m}
          onChange={u("m")}
        />
      </div>
      {st === "error" && (
        <p style={{ color: "#c62828" }}>
          Could not send right now. Please try again or email hanzlaworkspace@gmail.com.
        </p>
      )}
      <button
        className="btn gr"
        style={{ width: "100%", justifyContent: "center" }}
        type="submit"
        disabled={st === "busy"}
      >
        {st === "busy" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
export const Card = ({ p }) => {
  const href = fixUrl(p.link_url),
    x = !href.startsWith("#");
  return (
    <article className="pi pj">
      {p.image_url ? (
        <img className="th" src={p.image_url} alt={p.title} loading="lazy" />
      ) : (
        <svg
          className="th"
          viewBox={p.vb || "30 30 460 300"}
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label={p.title}
        >
          <use href={"#" + thumbOf(p)} width="520" height="420" />
        </svg>
      )}
      <div>
        <small>{p.category}</small>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        {p.metric && <span className="mc">{p.metric}</span>}
        <br />
        {href && (
          <a
            className="lnk"
            href={href}
            {...(x ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {p.link_label || "View project"}
          </a>
        )}
      </div>
    </article>
  );
};
const cat = (p) =>
  ({ "UGC ad": "ugc", "Web development": "web", SEO: "seo" })[p.category];
export function PortGrid() {
  const [c, setC] = useState("all");
  const { projects } = useSite();
  return (
    <>
      <div className="fl">
        {[
          ["all", "All work"],
          ["ugc", "UGC ads"],
          ["web", "Web development"],
          ["seo", "SEO"],
        ].map(([k, t]) => (
          <button
            key={k}
            className={"fb" + (c === k ? " on" : "")}
            onClick={() => setC(k)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid" id="pg-grid">
        {forPage(projects, "portfolio")
          .filter((p) => c === "all" || cat(p) === c)
          .map((p) => (
            <Card key={p.id} p={p} />
          ))}
      </div>
    </>
  );
}
export const Projects = ({ k }) => {
  const t = PT[k];
  const { projects } = useSite();
  return (
    <section className="projx">
      <div className="w">
        <div className="hd">
          <span className="eb">Projects</span>
          <h2>{t[0]}</h2>
          <p>{t[1]}</p>
        </div>
        <div className="grid">
          {forPage(projects, k).map((p) => (
            <Card key={p.id} p={p} />
          ))}
          <article className="pi pj nx">
            <div>
              <small>Next project</small>
              <h3>Your brand could be here</h3>
              <p>Share your goal and get a free audit within 24 hours.</p>
              <a className="btn gr" href="#contact">
                Start a project
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export const Facts = () => (
  <section className="soft facts">
    <div className="w">
      <div className="hd">
        <span className="eb">At a glance</span>
        <h2>Hanzla Workspace in one table</h2>
        <p>
          The same facts, stated the same way everywhere, so people and AI tools
          can quote them accurately.
        </p>
      </div>
      <div className="scroll">
        <table className="tbl">
          <caption style={{ position: "absolute", left: -999 }}>
            Business facts
          </caption>
          <tbody>
            {FR.map(([a, b]) => (
              <tr key={a}>
                <th scope="row">{a}</th>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
const MQ = [
  "TikTok Ads",
  "Instagram Reels",
  "YouTube Shorts",
  "Meta Ads",
  "Shopify",
  "WordPress",
  "React",
  "Google Search",
  "AI Overviews",
  "Core Web Vitals",
];
export const Marquee = () => (
  <div className="mq" aria-hidden="true">
    <div>
      {[...MQ, ...MQ].map((x, i) => (
        <span key={i}>{x}</span>
      ))}
    </div>
  </div>
);
