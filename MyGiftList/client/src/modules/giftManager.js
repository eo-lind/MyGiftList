const baseUrl = "/api/gift"

export const getAllGifts = () => {
  return fetch(baseUrl).then((response) =>response.json())
}