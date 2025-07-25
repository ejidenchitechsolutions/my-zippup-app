// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// 🔥 Replace these with your Supabase project values
const supabaseUrl = https://supabase.com/dashboard/project/asxguhofmmkqauogixwd
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeGd1aG9mbW1rcWF1b2dpeHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzQ0NjQsImV4cCI6MjA2OTAxMDQ2NH0.9MA9Te2Y95e58anwKCNF00AMkePedirHB-8WeoVQb1g

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
