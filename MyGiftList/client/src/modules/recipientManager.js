const baseUrl = "/api/recipient"

export const getAllRecipients = () => {
  return fetch(baseUrl).then((response) => response.json())
}

// gets an individual recipient with their assigned gifts
export const getRecipient = (id) => {
  return fetch(`${baseUrl}/GetRecipientByIdWithGifts/${id}`).then((res) => res.json())
}

export const addRecipient = (recipient) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipient)
  })
}