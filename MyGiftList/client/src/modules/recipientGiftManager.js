import { getToken } from "./authManager"

const baseUrl ="/api/gift"

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