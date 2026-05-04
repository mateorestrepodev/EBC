import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, Language } from '@/lib/i18n/dictionaries';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      t: translations.en,
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
      setLanguage: (lang) => set({ language: lang, t: translations[lang] }),
    }),
    {
      name: 'ebc-language-storage',
      
      // LA MAGIA SENIOR: Solo guardamos la variable 'language' en el Local Storage.
      // Ignoramos 't' y '_hasHydrated'.
      partialize: (state) => ({ language: state.language }),
      
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Al rehidratar, forzamos a que el diccionario 't' se actualice 
          // basándose en el idioma que acabamos de leer del Local Storage.
          state.setLanguage(state.language);
          setTimeout(() => state.setHasHydrated(true), 0);
        }
      }
    }
  )
);