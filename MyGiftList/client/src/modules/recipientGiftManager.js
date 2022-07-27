const baseUrl ="/api/gift"

export const addRecipientGift = (recipientGift) => {
  return fetch(`${baseUrl}/AddRecipientGift`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipientGift)
  })
}