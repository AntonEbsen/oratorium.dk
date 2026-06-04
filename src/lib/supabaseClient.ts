import { createClient } from '@supabase/supabase-js';

// Single shared browser Supabase client. The anon key is public by design
// (protected by Row Level Security). Values come from PUBLIC_ env vars when set,
// otherwise fall back to the project's known public values so the site works
// without extra configuration.
const url =
    import.meta.env.PUBLIC_SUPABASE_URL || 'https://sdfwawnviylwwlbnwpnj.supabase.co';
const key =
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZndhd252aXlsd3dsYm53cG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNzY4MjEsImV4cCI6MjA4NDg1MjgyMX0.oIR0N05DQY6ePfDXVNC0UI9DrLrM-LevsK64ANEJGag';

export const supabase = createClient(url, key);
