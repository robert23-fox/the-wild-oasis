/*eslint-disable no-unused-vars*/
/*eslint-disable react/prop-types*/

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sciflnkcgvijlspyshzr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaWZsbmtjZ3ZpamxzcHlzaHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjI0MDUsImV4cCI6MjA0NjIzODQwNX0.JA7TbxrUasgUw2qYTSiWfEGaCthHMIzKSorzxUUkU1Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
