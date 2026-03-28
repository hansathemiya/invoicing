// js/config.js

const SUPABASE_URL = 'https://hsjhuiyyxotsyqjncvvm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzamh1aXl5eG90c3lxam5jdnZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MTA0MDMsImV4cCI6MjA5MDI4NjQwM30.p-CXtR_bY20n1fq8hz1hvpWu9gNT3dWPoVs7NNiwhRY'; 

// Create client with unique name to avoid conflict with CDN global
const six7Supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export to window
window.supabaseClient = six7Supabase;

// Log for debugging (remove in production)
console.log('✅ Supabase client initialized:', SUPABASE_URL);
