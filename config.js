// ============================================================
// config.js
// Fill in your keys from Supabase → Settings → API
// ============================================================

const SUPABASE_URL = 'https://ukwcwtwgmdjavsckeily.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrd2N3dHdnbWRqYXZzY2tlaWx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwOTcyNDksImV4cCI6MjA5NjY3MzI0OX0.Ct7X4AHCIdx1K3jcypN3nxrzSX_H6Uyx4NSb6bzxF-Q';

// Do not change anything below this line
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
