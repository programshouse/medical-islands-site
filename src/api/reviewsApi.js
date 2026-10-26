import { get } from './client.js'

export const reviewsApi = {
  all: async () => {
    const response = await get('/reviews')
    return response.data || response || []
  },
  one: async (id) => {
    const response = await get(`/reviews/${id}`)
    return response.data || response || null
  },
}
