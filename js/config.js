// js/config.js
const SUPABASE_URL = 'https://hsjhuiyyxotsyqjncvvm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzamh1aXl5eG90c3lxam5jdnZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MTA0MDMsImV4cCI6MjA5MDI4NjQwM30.p-CXtR_bY20n1fq8hz1hvpWu9gNT3dWPoVs7NNiwhRY';

const six7Supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseClient = six7Supabase;

console.log('✅ Six7 Supabase client initialized');
