const baseUrl = "/api/recipient"

export const getAllRecipients = () => {
  return fetch(baseUrl).then((response) => response.json())
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