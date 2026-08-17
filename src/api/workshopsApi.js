import { get } from './client.js'

export const workshopsApi = {
  all: async () => (await get('/workshops')).data ?? [],
  one: async (id) => (await get(`/workshops/${id}`)).data ?? null,
}
