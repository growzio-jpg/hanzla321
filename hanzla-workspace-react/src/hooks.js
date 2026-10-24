import { useEffect } from "react";
import { F, M, PN } from "./data";
import { getSite, forPage, useSite } from "./store";
export const pageId = () => {
  const h = (location.hash || "#home").slice(1);
  return M[h] ? h : h === "seo-calc" ? "seo-services" : "home";
};
export function useSeo(id) {
  const { projects } = useSite();
  useEffect(() => {
    const m = M[id],
      B = location.href.split("#")[0],
      g = (i) => document.getElementById(i),
      q = (s) => document.querySelector(s);
    document.title = m[0];
    q("meta[name=description]").content = m[1];
    g("cn").href = B;
    g("hl").href = B;
    g("ogu").content = B + (id === "home" ? "" : "#" + id);
    g("twt").content = m[0];
    g("twd").content = m[1];
    q('meta[property="og:title"]').content = m[0];
    q('meta[property="og:description"]').content = m[1];
    const ld = (i, o) => {
      let s = g(i);
      if (!s) {
        s = document.createElement("script");
        s.type = "application/ld+json";
        s.id = i;
        document.head.appendChild(s);
      }
      s.textContent = JSON.stringify(o);
    };
    ld("faqld", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: F[m[2]].map(([a, b]) => ({
        "@type": "Question",
        name: a,
        acceptedAnswer: { "@type": "Answer", text: b },
      })),
    });
    const gr = [
      {
        "@type": "BreadcrumbList",
        itemListElement: (id === "home"
          ? [["Home", "home"]]
          : [
              ["Home", "home"],
              [PN[id], id],
            ]
        ).map((x, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: x[0],
          item: B + "#" + x[1],
        })),
      },
      { "@type": "WebPage", name: m[0], description: m[1], url: B + "#" + id },
    ];
    if (["ugc-ads", "web-development", "seo-services"].includes(id))
      gr.push({
        "@type": "Service",
        name: PN[id],
        description: m[1],
        provider: { "@id": "#org" },
        areaServed: "Worldwide",
      });
    const list = forPage(projects, m[2]);
    if (list.length)
      gr.push({
        "@type": "ItemList",
        name: PN[id] + " projects",
        itemListElement: list.map((k, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: k.title,
            description: k.description,
            creator: { "@id": "#org" },
          },
        })),
      });
    ld("pgld", { "@context": "https://schema.org", "@graph": gr });
  }, [id, projects]);
}
export function useReveal(id) {
  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion:reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        "#main :is(.card,.st,.pi,.hd,.tbl,.tl,.note,.chk li,.band,.cm,.cform,.pf,details:not(.tx))",
      )
      .forEach((x) => {
        x.classList.add("rv");
        io.observe(x);
      });
    return () => io.disconnect();
  }, [id]);
}
