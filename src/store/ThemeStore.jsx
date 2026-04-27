import { create } from "zustand";
import { Light, Dark } from '../styles/themes';

export const useThemeStore = create(
    (set, get) => ({
        theme: "light",
        themeStyles: Light,
        setTheme: () => {
            const { theme } = get();
            set({ theme: theme === "light" ? "dark" : "light" })
            set({ themeStyles: theme === "light" ? Dark : Light })
        }
    })
)