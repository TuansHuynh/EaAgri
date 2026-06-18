import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Missing Supabase environment variables. Please check your .env.local file.");
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
