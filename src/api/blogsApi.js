import { get } from './client.js'

export const blogsApi = {
  all: async () => {
    const response = await get('/blogs')
    return response.data || response || []
  },
  one: async (id) => {
    const response = await get(`/blogs/${id}`)
    return response.data || response || null
  },
}
