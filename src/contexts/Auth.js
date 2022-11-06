import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../supabase";
import { createClient } from "@supabase/supabase-js";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    // const supabase = createClient(
    //   "https://xbykinhguubtruxftdwo.supabase.co",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhieWtpbmhndXVidHJ1eGZ0ZHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2ODI1OTcsImV4cCI6MTk4MzI1ODU5N30.RnCFSDu7LZ9Id2qJZAByeLtlx7LUcLn3uh_11AdAJI0"
    // );
    console.log("check supabase");
    console.log(supabase.auth.getSession());
    const session = supabase.auth.getSession();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) =>
      supabase.auth.signInWithPassword({
        email: data.userEmail,
        password: data.userPassword,
      }),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
