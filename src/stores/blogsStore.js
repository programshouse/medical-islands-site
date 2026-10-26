import { blogsApi } from '../api/blogsApi.js'
import { createResourceStore } from './createResourceStore.js'

export const useBlogsStore = createResourceStore(blogsApi)
