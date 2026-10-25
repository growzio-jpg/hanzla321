import { Suspense, lazy, useEffect, useState } from "react";
import { pageId, useSeo, useReveal } from "./hooks";
import Sprite from "./components/Sprite";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
const Ugc = lazy(() => import("./pages/Ugc"));
const Web = lazy(() => import("./pages/Web"));
const SeoServices = lazy(() => import("./pages/SeoServices"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
import { useSite } from "./store";
const Admin = lazy(() => import("./pages/Admin"));
const PAGES = {
  home: Home,
  "ugc-ads": Ugc,
  "web-development": Web,
  "seo-services": SeoServices,
  portfolio: Portfolio,
  about: About,
  contact: Contact,
};
export default function App() {
  const [id, setId] = useState(pageId);
  const [admin, setAdmin] = useState(() => location.hash === "#admin");
  const { settings } = useSite();
  useEffect(() => {
    const f = () => {
      setAdmin(location.hash === "#admin");
      setId(pageId());
      if ((location.hash || "").slice(1) !== "seo-calc") window.scrollTo(0, 0);
    };
    addEventListener("hashchange", f);
    return () => removeEventListener("hashchange", f);
  }, []);
  useSeo(id);
  useReveal(id);
  const Page = PAGES[id];
  if (admin)
    return (
      <Suspense fallback={<p style={{ padding: 40 }}>Loading admin…</p>}>
        <Admin />
      </Suspense>
    );
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Sprite />
      <Topbar />
      <Header id={id} />
      <main id="main">
        <Suspense fallback={<div style={{ minHeight: "70vh" }} />}>
          <Page key={id} />
        </Suspense>
      </main>
      <Footer />
      <a
        className="wa"
        href={settings.wa_link || "https://wa.me/923195179084"}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <svg className="i">
          <use href="#i-chat" />
        </svg>
      </a>
    </>
  );
}
