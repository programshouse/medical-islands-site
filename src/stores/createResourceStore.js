import { create } from 'zustand'

export const createResourceStore = (api) =>
  create((set, get) => ({
    items: [],
    item: null,
    loading: false,
    error: null,

    fetchAll: async (force = false) => {
      if (!force && get().items.length) return

      set({ loading: true, error: null })
      try {
        set({ items: await api.all(), loading: false })
      } catch (error) {
        set({ error: error.message, loading: false })
      }
    },

    fetchOne: async (id) => {
      set({ loading: true, error: null, item: null })
      try {
        set({ item: await api.one(id), loading: false })
      } catch (error) {
        set({ error: error.message, loading: false })
      }
    },
  }))
