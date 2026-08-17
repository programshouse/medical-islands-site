const fallbackImages = [
  '/img/workshop1.webp',
  '/img/workshop2.webp',
  '/img/workshop3.webp',
]

export const getWorkshopImage = (workshop) => {
  if (workshop?.image) return workshop.image

  const id = Number(workshop?.id)
  const index = Number.isFinite(id) && id > 0 ? (id - 1) % fallbackImages.length : 0

  return fallbackImages[index]
}
