import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
    user: null,
    isAuth: false,

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

    cerrarSesion: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("Error al cerrar sesión:", error);
        } else {
            set({ user: null, isAuth: false });
        }
    }
}));