import { useSyncExternalStore } from "react";
import { PL, PJ } from "./data";
import { sb } from "./supabase";

export const PAGES = ["home", "ugc", "web", "seo", "about", "contact", "portfolio"];
const PORT = ["sos", "gz", "sk", "ap", "hw"];
// Built-in copy of the projects: shown instantly and used if Supabase is unreachable.
const defaults = Object.keys(PL).map((k, i) => ({
  id: k,
  title: PL[k].t,
  category: PL[k].tag,
  description: PL[k].d,
  metric: PL[k].m,
  link_url: PL[k].a,
  link_label: PL[k].l,
  image_url: null,
  thumb: PL[k].th,
  vb: PL[k].vb,
  sort_order: i,
  show_on: [
    ...Object.keys(PJ).filter((p) => PJ[p].includes(k)),
    ...(PORT.includes(k) ? ["portfolio"] : []),
  ],
}));
let state = {
  projects: defaults,
  settings: { wa_link: "https://wa.me/923195179084", wa_number: "923195179084" },
};
const subs = new Set();
const set = (s) => {
  state = { ...state, ...s };
  subs.forEach((f) => f());
};
let started = false;
export async function reloadSite() {
  const [p, s] = await Promise.all([
    sb.from("projects").select("*").eq("published", true).order("sort_order").order("created_at"),
    sb.from("site_settings").select("key,value"),
  ]);
  const next = {};
  if (!p.error && p.data) next.projects = p.data;
  if (!s.error && s.data?.length)
    next.settings = { ...state.settings, ...Object.fromEntries(s.data.map((r) => [r.key, r.value])) };
  set(next);
}
export const getSite = () => state;
export function useSite() {
  if (!started) {
    started = true;
    reloadSite();
  }
  return useSyncExternalStore(
    (f) => (subs.add(f), () => subs.delete(f)),
    () => state,
  );
}
export const forPage = (projects, page) => projects.filter((p) => p.show_on?.includes(page));
const FALL = { "UGC ad": "il-ugc", "Web development": "il-web", SEO: "il-seo" };
export const thumbOf = (p) => p.thumb || FALL[p.category] || "il-web";
