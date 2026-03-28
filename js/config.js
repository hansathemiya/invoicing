// js/config.js

const SUPABASE_URL = 'https://hsjhuiyyxotsyqjncvvm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LDPqrZ_lnAZMZIgOZ-6Qwg_VdQbMi6A'; 

// Create client with unique name to avoid conflict with CDN global
const six7Supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export to window
window.supabaseClient = six7Supabase;

// Log for debugging (remove in production)
console.log('✅ Supabase client initialized:', SUPABASE_URL);
