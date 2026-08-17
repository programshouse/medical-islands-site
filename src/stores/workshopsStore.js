import { workshopsApi } from '../api/workshopsApi.js'
import { createResourceStore } from './createResourceStore.js'

export const useWorkshopsStore = createResourceStore(workshopsApi)
