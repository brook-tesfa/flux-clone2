import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  signIn: async () => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) throw error;
    } catch (error: any) {
      set({ 
        error: error.message || 'Failed to sign in', 
        loading: false 
      });
    }
  },

  signOut: async () => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, loading: false });
    } catch (error: any) {
      set({ 
        error: error.message || 'Failed to sign out', 
        loading: false 
      });
    }
  },

  setUser: (user) => set({ user, loading: false }),
  clearError: () => set({ error: null })
}));

// Set up auth state listener
supabase.auth.onAuthStateChange((event, session) => {
  useAuthStore.getState().setUser(session?.user || null);
});