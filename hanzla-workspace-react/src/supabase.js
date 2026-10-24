import { createClient } from "@supabase/supabase-js";
// The publishable (anon) key is safe to ship in the browser: Row Level Security
// in the database decides what visitors and admins can do.
const URL =
  import.meta.env.VITE_SUPABASE_URL || "https://mktcqhwencspxnknvxyd.supabase.co";
const KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_jf1g3D33ROM_GvORL9GRJA_UL-A_8XL";
export const sb = createClient(URL, KEY);
export const BUCKET = "project-images";
