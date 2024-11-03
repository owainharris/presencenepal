import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://omhohfkagjrzfdknuhad.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taG9oZmthZ2pyemZka251aGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDQ2MDYsImV4cCI6MjA0NjIyMDYwNn0.GEGecKuYwWTbsQ8q7BvGT4M4rQNllUwC-KJxDqOF1tQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});