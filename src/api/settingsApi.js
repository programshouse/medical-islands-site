import { get } from './client.js'

export const settingsApi = {
  get: async () => {
    const response = await get('/settings')
    return response.data || response || null
  },
}
