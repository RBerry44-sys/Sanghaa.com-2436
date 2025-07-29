import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://koddpnqgmtzssxxzuhuo.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZGRwbnFnbXR6c3N4eHp1aHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MzU4MjUsImV4cCI6MjA2OTMxMTgyNX0.a4S-ZEztN23pg-ncqH1iZ655yeXqTwPRWj7c5lgxif0'

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

export default supabase;