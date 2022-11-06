import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xbykinhguubtruxftdwo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhieWtpbmhndXVidHJ1eGZ0ZHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2ODI1OTcsImV4cCI6MTk4MzI1ODU5N30.RnCFSDu7LZ9Id2qJZAByeLtlx7LUcLn3uh_11AdAJI0"
);

export { supabase };
