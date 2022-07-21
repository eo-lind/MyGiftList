const baseUrl = "/api/recipient"

export const getAllRecipients = () => {
  return fetch(baseUrl).then((response) => response.json())
}