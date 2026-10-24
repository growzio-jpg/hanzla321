import { useEffect, useState } from "react";
import { IMG } from "../data";
import { hideImg } from "../util";
const SV = [
  [
    "ugc-ads",
    "video",
    "UGC Video Ads",
    "Hooks, scripts and creatives that convert",
  ],
  [
    "web-development",
    "code",
    "Web Development",
    "Fast websites and online stores",
  ],
  [
    "seo-services",
    "chart",
    "SEO, AEO and GEO",
    "Rank on Google and in AI answers",
  ],
];
export default function Header({ id }) {
  const [open, setOpen] = useState(false),
    [sc, setSc] = useState(false),
    [shut, setShut] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [id]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const s = () => setSc(scrollY > 10),
      k = (e) => e.key === "Escape" && setOpen(false),
      r = () => innerWidth > 860 && setOpen(false),
      c = (e) => {
        if (!e.target.closest(".dd")) setShut(false);
      };
    addEventListener("scroll", s, { passive: true });
    addEventListener("keydown", k);
    addEventListener("resize", r);
    document.addEventListener("click", c);
    return () => {
      removeEventListener("scroll", s);
      removeEventListener("keydown", k);
      removeEventListener("resize", r);
      document.removeEventListener("click", c);
    };
  }, []);
  const on = (p) => (id === p ? "on" : "");
  return (
    <header className={sc ? "sc" : ""}>
      <div className="w">
        <a href="#home" className="logo" aria-label="Hanzla Workspace home">
          <b>
            H
            <img
              src={IMG}
              alt="Hanzla, founder of Hanzla Workspace"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={hideImg}
            />
          </b>
          <span>
            Hanzla Workspace<small>Growth Studio</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <ul
            id="nm"
            className={open ? "on" : ""}
            onClick={(e) => {
              if (e.target.closest("a")) {
                setOpen(false);
                setShut(true);
              }
            }}
          >
            <li className="dh">
              <span>Menu</span>
              <button
                type="button"
                id="mc"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                &times;
              </button>
            </li>
            <li>
              <a href="#home" className={on("home")}>
                Home
              </a>
            </li>
            <li
              className={"dd" + (shut ? " shut" : "")}
              onMouseLeave={() => setShut(false)}
            >
              <a
                href="#ugc-ads"
                aria-haspopup="true"
                className={SV.some((x) => x[0] === id) ? "on" : ""}
              >
                Services
              </a>
              <div className="sub">
                {SV.map(([p, ic, t, d]) => (
                  <a key={p} href={"#" + p} className={on(p)}>
                    <svg className="i">
                      <use href={"#i-" + ic} />
                    </svg>
                    <div>
                      <strong>{t}</strong>
                      <span>{d}</span>
                    </div>
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a href="#portfolio" className={on("portfolio")}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className={on("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className={on("contact")}>
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="cta">
                Get Free Audit
              </a>
            </li>
          </ul>
        </nav>
        <button
          id="mt"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="nm"
          onClick={() => setOpen(!open)}
        >
          <svg className="i">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <div
        id="ov"
        className={open ? "on" : ""}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
