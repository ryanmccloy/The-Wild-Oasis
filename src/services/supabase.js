import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xwswxuyplmrtldlodmvg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3c3d4dXlwbG1ydGxkbG9kbXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NjM3MDcsImV4cCI6MjAyODIzOTcwN30.69750ATTRO2_k2NpjOUbWeUT5dyG3YopUhNA2AhhsE4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
