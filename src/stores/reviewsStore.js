import { reviewsApi } from '../api/reviewsApi.js'
import { createResourceStore } from './createResourceStore.js'

export const useReviewsStore = createResourceStore(reviewsApi)
