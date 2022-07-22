const baseUrl = "/api/gift"

export const getAllGifts = () => {
  return fetch(baseUrl).then((response) =>response.json())
}

export const addGift = (gift) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gift)
  })
}