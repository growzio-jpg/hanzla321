export const hideImg = (e) => {
  e.currentTarget.style.display = "none";
};
export const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const goCalc = () =>
  document.getElementById("seo-calc")?.scrollIntoView();

// Turns "growzio.com" into "https://growzio.com" so links never resolve against our own domain.
export const fixUrl = (u) => {
  u = (u || "").trim();
  if (!u || /^(#|\/|mailto:|tel:|https?:\/\/)/i.test(u)) return u;
  return "https://" + u.replace(/^\/+/, "");
};
