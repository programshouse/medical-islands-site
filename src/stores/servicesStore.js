import { servicesApi } from '../api/servicesApi.js'
import { createResourceStore } from './createResourceStore.js'

export const useServicesStore = createResourceStore(servicesApi)
