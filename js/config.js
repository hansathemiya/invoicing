// js/config.js

// ⚠️ Replace with your actual keys
const SUPABASE_URL = 'https://hsjhuiyyxotsyqjncvvm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LDPqrZ_lnAZMZIgOZ-6Qwg_VdQbMi6A'; 

// ✅ Use a different variable name for our client instance
const six7Supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export to window with a unique name
window.supabaseClient = six7Supabase;
