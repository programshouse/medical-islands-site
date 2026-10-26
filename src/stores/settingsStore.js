import { create } from 'zustand'
import { settingsApi } from '../api/settingsApi.js'

export const useSettingsStore = create((set, get) => ({
  settings: null,
  loading: false,
  error: null,

  fetchSettings: async (force = false) => {
    if (!force && get().settings) return

    set({ loading: true, error: null })
    try {
      const data = await settingsApi.get()
      set({ settings: data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
