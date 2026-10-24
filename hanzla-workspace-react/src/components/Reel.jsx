import { useEffect, useRef, useState } from "react";
const I = (n) => (
  <svg className="i">
    <use href={"#i-" + n} />
  </svg>
);
const css = (s) => Object.fromEntries(s.split(";").map((x) => x.split(":")));
const CH = (t, s, pos, d = "d4") => (
  <div className={"chipf pp " + d} style={css(pos)}>
    {t}
    <small>{s}</small>
  </div>
);
const PH = (b, w, c) => (
  <div className="art">
    <div className="mkp">
      <div className="scr">
        <div className="face rs" />
        <div className="bub rs d2">{b}</div>
        <div className="pbar">
          <i className="fx" style={{ "--w": w + "%" }} />
        </div>
      </div>
    </div>
    {c}
  </div>
);
const BR = (h) => (
  <div className="art">
    <div className="brw">
      <div className="tb">
        <i />
        <i />
        <i />
      </div>
      <div className="bd">{h}</div>
    </div>
  </div>
);
const SK = (c, d) => <div className={`sk ${c} rs ${d}`} />,
  BL = (c, d) => <div className={`blk ${c} pp ${d}`} />;
const G3 = (
  <div className="g3">
    {BL("", "d4")}
    {BL("gg", "d5")}
    {BL("", "d6")}
  </div>
);
const CK = (a) => (
  <div className="art">
    <div className="ck">
      {a.map((t, i) => (
        <div key={t} className={"sl d" + (i + 1)}>
          {I("check")}
          {t}
        </div>
      ))}
    </div>
  </div>
);
const SB = (q) => (
  <div className="sbar rs">
    {I("search")}
    <span className="tp" style={{ "--c": q.length + "ch" }}>
      {q}
    </span>
  </div>
);
const RS = (t, n, d, m = "") => (
  <div className={`res1 ${m} sl ${d}`}>
    <b>{n}</b>
    {t}
  </div>
);
const CHART = (
  <div className="art">
    <div className="chrt">
      {[18, 26, 34, 45, 58, 72, 90].map((h, i) => (
        <i
          key={i}
          className={"gy d" + (Math.min(i, 5) + 1)}
          style={{ height: h + "%" }}
        />
      ))}
    </div>
  </div>
);
const GAU = (
  <div className="art">
    <svg viewBox="0 0 120 120" width="150" height="150">
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="rgba(255,255,255,.15)"
        strokeWidth="10"
      />
      <circle
        className="gau"
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#34c27a"
        strokeWidth="10"
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontFamily="Manrope,sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="#fff"
      >
        Fast
      </text>
    </svg>
    {CH("LCP 2.5 s or less", "Good target", "left:2%;top:10%", "d2")}
    {CH("INP 200 ms or less", "Good target", "right:2%;top:40%", "d3")}
    {CH("CLS 0.1 or less", "Good target", "left:6%;bottom:6%", "d4")}
  </div>
);
const SERP = (q, t, e) => (
  <div className="art">
    {SB(q)}
    {RS(t, 1, "d3")}
    {RS("Competitor result", 2, "d4", "m")}
    {e}
  </div>
);
const REELS = {
  home: [
    [
      "01 UGC video ads",
      "Hooks that stop the scroll",
      "Creator-style videos built on a three-second hook, a clear script and platform-native pacing.",
      PH(
        "This changed my morning routine",
        72,
        <>
          {CH("Scroll stopped", "first 3 seconds", "right:2%;top:12%")}
          {CH(
            "Clicks rising",
            "clear call to action",
            "left:0;bottom:14%",
            "d5",
          )}
        </>,
      ),
    ],
    [
      "02 Web development",
      "Websites built to convert",
      "Fast, mobile-first pages with clear paths to call, book or buy.",
      BR(
        <>
          {SK("h", "d1")}
          {SK("", "d2")}
          {SK("b", "d3")}
          {G3}
        </>,
      ),
    ],
    [
      "03 SEO, AEO and GEO",
      "Found on Google and in AI answers",
      "Technical SEO, direct answers and clear entities so people and machines find you.",
      SERP(
        "best ugc video ads agency",
        "Hanzla Workspace | UGC Ads, Web and SEO",
        RS("Another result", 3, "d5", "m"),
      ),
    ],
    [
      "04 Growth",
      "Results that compound",
      "Ads bring attention, your site converts it, and search keeps customers arriving.",
      CHART,
    ],
  ],
  ugc: [
    [
      "01 Hook, 0 to 3s",
      "Earn the next second",
      "A pattern interrupt or bold claim that stops the scroll.",
      PH(
        "Stop scrolling: your skin needs this",
        20,
        CH("Hook rate", "tracked per creative", "right:0;top:12%"),
      ),
    ],
    [
      "02 Problem, 3 to 8s",
      "Name the frustration",
      "The pain your buyer already feels, in their own words.",
      PH("Dry, dull skin every single morning?", 38),
    ],
    [
      "03 Solution, 8 to 18s",
      "Show it working",
      "A quick, visual demonstration of the product doing the job.",
      PH("One product. A 30-second routine.", 62),
    ],
    [
      "04 Proof, 18 to 25s",
      "Build belief",
      "Texture, results and genuine reactions that make claims credible.",
      PH(
        "Visible glow in just one week",
        82,
        CH("Hold rate", "story keeps attention", "left:0;bottom:16%"),
      ),
    ],
    [
      "05 Call to action, 25 to 30s",
      "One clear next step",
      "Tell viewers exactly what to do and why now.",
      PH(
        "Tap the link and get yours today",
        100,
        CH("CTR and CPA", "measured and improved", "right:0;top:14%"),
      ),
    ],
  ],
  web: [
    [
      "01 Wireframe",
      "Structure before style",
      "Goals, pages and one action per screen are planned first.",
      BR(
        <>
          {SK("h", "d1")}
          {SK("", "d2")}
          {SK("", "d3")}
          <div className="g3">
            {BL("", "d4")}
            {BL("", "d5")}
            {BL("", "d6")}
          </div>
        </>,
      ),
    ],
    [
      "02 Design",
      "A clean, branded interface",
      "Colour, type and spacing applied and checked on real phone sizes.",
      BR(
        <>
          {SK("h", "d1")}
          {SK("b", "d2")}
          {SK("g", "d3")}
          {G3}
        </>,
      ),
    ],
    [
      "03 Speed",
      "Built for Core Web Vitals",
      "Optimized images, minimal scripts and stable layouts targeting Google’s thresholds.",
      GAU,
    ],
    [
      "04 Launch",
      "Checked, then live",
      "Forms, links, devices and analytics verified before going live.",
      CK([
        "Mobile layouts tested",
        "Forms and WhatsApp working",
        "SEO and schema in place",
        "Analytics connected",
      ]),
    ],
  ],
  seo: [
    [
      "01 Search",
      "Start with real intent",
      "We map the questions and keywords your buyers actually search for.",
      SERP(
        "web developer in lahore",
        "Your page, answering the question",
        null,
      ),
    ],
    [
      "02 Foundations",
      "Fix the technical base",
      "Speed, indexing, metadata and structured data on your key pages.",
      CK([
        "Fast, mobile-friendly pages",
        "Clean sitemap and indexing",
        "Titles and meta rewritten",
        "Schema markup added",
      ]),
    ],
    [
      "03 Answers",
      "Be the direct answer",
      "Short, clear answers under question headings that people and AI tools can quote.",
      BR(
        <>
          {SK("h", "d1")}
          {SK("b", "d2")}
          {SK("", "d3")}
          {SK("", "d4")}
          {SK("g", "d5")}
        </>,
      ),
    ],
    [
      "04 Growth",
      "Visibility that compounds",
      "Impressions, clicks and leads tracked and reported every month.",
      CHART,
    ],
  ],
};
export default function Reel({ k, d, label }) {
  const S = REELS[k],
    N = S.length,
    T = d * N,
    ref = useRef(null);
  const [t, setT] = useState(0),
    [play, setPlay] = useState(
      () => !matchMedia("(prefers-reduced-motion:reduce)").matches,
    ),
    [vis, setVis] = useState(false);
  const i = Math.min(Math.floor(t / d), N - 1);
  useEffect(() => {
    const o = new IntersectionObserver((e) => setVis(e[0].isIntersecting), {
      threshold: 0.25,
    });
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!(play && vis)) return;
    const id = setInterval(() => setT((x) => (x + 100) % T), 100);
    return () => clearInterval(id);
  }, [play, vis, T]);
  return (
    <>
      <div
        ref={ref}
        className={"vid" + (play ? "" : " paused")}
        role="region"
        aria-label={label}
      >
        {S.map((x, j) => (
          <div key={j} className={"scn" + (j === i ? " on" : "")}>
            <div className="cap">
              <small>{x[0]}</small>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
            {x[3]}
          </div>
        ))}
        <div className="chap">
          {S.map((x, j) => (
            <button
              key={j}
              type="button"
              className={j === i ? "on" : ""}
              aria-label={"Scene " + (j + 1) + ": " + x[1]}
              onClick={() => setT(j * d)}
            />
          ))}
        </div>
        <div className="vc">
          <button
            type="button"
            aria-label={play ? "Pause animation" : "Play animation"}
            onClick={() => setPlay(!play)}
          >
            {play ? (
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M8 5v14M16 5v14"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M8 5l11 7-11 7z" fill="currentColor" />
              </svg>
            )}
          </button>
          <div
            className="tr"
            role="progressbar"
            aria-label="Animation progress"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setT(((e.clientX - r.left) / r.width) * T);
            }}
          >
            <i style={{ width: (t / T) * 100 + "%" }} />
          </div>
          <span className="vl">{S[i][0].replace(/^\d+\s*/, "")}</span>
        </div>
      </div>
      <details className="tx">
        <summary>Read the animation transcript</summary>
        <p>{S.map((x) => x[0] + ": " + x[1] + ". " + x[2]).join(" ")}</p>
      </details>
    </>
  );
}
