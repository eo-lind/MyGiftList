import { getToken } from "./authManager"

const baseUrl = "/api/gift"

export const getAllGifts = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.json())

  })
}

export const addGift = (gift) => {
  return getToken().then((token) => {
    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(gift),
    })
    .then((resp) => resp.json())
  })
  
}
