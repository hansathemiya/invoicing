// js/config.js

// ⚠️ Replace with your actual keys
const SUPABASE_URL = 'https://hsjhuiyyxotsyqjncvvm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LDPqrZ_lnAZMZIgOZ-6Qwg_VdQbMi6A'; 

// Initialize Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export to window so other scripts can use it
window.supabaseClient = supabase;
