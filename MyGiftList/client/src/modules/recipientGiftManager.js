import { getToken } from "./authManager"

const baseUrl = "/api/gift"
//TODO: update the baseUrls & path if add function changes

const newBaseUrl = "/api/RecipientGift"

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

export const updateRecipientGift = (recipientGift) => {

  return getToken().then((token) =>
      fetch(`${newBaseUrl}/${recipientGift.id}`, {
          method: "PUT",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(recipientGift),
      })
  )
}

// fetches a RecipientGift object by Id to be used with the edit form
export const getRecipientGiftById = (id) => {
  return getToken().then((token) => {
    return fetch(`${newBaseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => response.json())
  })
}