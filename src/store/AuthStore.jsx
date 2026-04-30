import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
    user: null,
    isAuth: false,
    authLoading: true,

    iniciarSesion: async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) throw error;

            set({ user: data.user, isAuth: true });
            return data;

        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            throw error;
        }
    },

    observarSesion: () => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                set({ user: session.user, isAuth: true });
            }
            set({ authLoading: false });
        });

        supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                set({ user: session.user, isAuth: true, authLoading: false });
            } else {
                set({ user: null, isAuth: false, authLoading: false });
            }
        });
    },

    cerrarSesion: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("Error al cerrar sesión:", error);
        } else {
            set({ user: null, isAuth: false });
        }
    }
}));