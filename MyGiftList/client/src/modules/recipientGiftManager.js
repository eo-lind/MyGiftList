import { getToken } from "./authManager"

const baseUrl = "/api/gift"
//TODO: update the baseUrls & path if add function changes

const newBaseUrl = "/api/recipientGift"

export const addRecipientGift = (recipientGift) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/AddRecipientGift`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipientGift),
    })
    .then((response) => response.json())
  })
}

export const deleteRecipientGift = (id) => {
  return getToken().then((token) => {
    return fetch(`${newBaseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
  })
}