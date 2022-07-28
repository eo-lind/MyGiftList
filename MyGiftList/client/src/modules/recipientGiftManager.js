import { getToken } from "./authManager"

const baseUrl = "/api/recipientGift"

export const addRecipientGift = (recipientGift) => {
    return getToken().then((token) => {
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(recipientGift),
        })
    })
}

export const deleteRecipientGift = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
  })
}

export const updateRecipientGift = (recipientGift) => {

  return getToken().then((token) =>
      fetch(`${baseUrl}/${recipientGift.id}`, {
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
    return fetch(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => response.json())
  })
}