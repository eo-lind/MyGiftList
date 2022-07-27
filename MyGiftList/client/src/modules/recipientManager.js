import { getToken } from "./authManager"

const baseUrl = "/api/recipient"

export const getAllRecipients = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => response.json())
    })
}

// gets an individual recipient with their assigned gifts
export const getRecipient = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetRecipientByIdWithGifts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.json())
  })
}

export const addRecipient = (recipient) => {
    return getToken().then((token) => {
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(recipient),
        }).then((resp) => resp.json())
    })
}
