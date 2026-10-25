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

// Supabase storage links get ?download= so the browser saves the PDF; Drive/other links just open.
export const dlUrl = (u, name = "Hanzla-Resume.pdf") =>
  /\.supabase\.co\/storage\//.test(u || "")
    ? u.split("?")[0] + "?download=" + encodeURIComponent(name)
    : fixUrl(u);
