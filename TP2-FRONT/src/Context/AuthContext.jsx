import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../Scripts/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function hydrateSession() {
      if (!supabase) {
        if (isMounted) {
          setLoading(false);
        }
        return;
      }

      const { data } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    }

    hydrateSession();

    if (!supabase) {
      return () => {
        isMounted = false;
      };
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signUp(email, password) {
    if (!supabase) {
      return { data: null, error: new Error("Supabase client is not configured") };
    }

    return supabase.auth.signUp({ email, password });
  }

  async function signIn(email, password) {
    if (!supabase) {
      return { data: null, error: new Error("Supabase client is not configured") };
    }

    return supabase.auth.signInWithPassword({ usuario, password });
  }

  async function signOut() {
    if (!supabase) {
      return { error: new Error("Supabase client is not configured") };
    }

    return supabase.auth.signOut();
  }

  const value = useMemo(
    () => ({
      session,
      user,
      loading,
      signUp,
      signIn,
      signOut,
    }),
    [session, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
