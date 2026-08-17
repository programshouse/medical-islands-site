import { get } from './client.js'

export const servicesApi = {
  all: () => get('/services'),
  one: (id) => get(`/services/${id}`),
}
