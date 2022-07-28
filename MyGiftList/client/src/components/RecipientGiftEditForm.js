import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getRecipientGiftById, updateRecipientGift } from "../modules/recipientGiftManager"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const RecipientGiftEditForm = () => {
  const [recipientGift, setRecipientGift] = useState({})
  const navigate = useNavigate()
  const { recipientGiftId } = useParams()

  useEffect(() => {
      getRecipientGiftById(recipientGiftId).then((resp) => setRecipientGift(resp))
  }, [])

  const handleInputChange = (evt) => {
      let target = { ...recipientGift }

      target[evt.target.id] = evt.target.value
      setRecipientGift(target)
      // const value = evt.target.value
      // const key = evt.target.id
      // const recipientGiftCopy = { ...recipientGift }
      // recipientGiftCopy[key] = value

      // setRecipientGift(recipientGiftCopy)
  }

  const handleClickSaveRecipientGift = () => {
      updateRecipientGift(recipientGift).then(navigate(`/recipients/${recipientGift.recipientId}`))
}


  return (
      <Form>
          <h4>Edit {recipientGift.id}</h4>
          <FormGroup>
              <Label for="quantity">Quantity:</Label>
              <select name="qty" id="qty" value={recipientGift.qty ?? ""} onChange={handleInputChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
              </select>
          </FormGroup>

          <FormGroup>
              <Label for="notes">Notes:</Label>
              <Input
                  type="text"
                  name="notes"
                  id="notes"
                  placeholder="Notes (size, color, etc.)"
                  value={recipientGift.notes ?? ""}
                  onChange={handleInputChange}
              />
          </FormGroup>
          <Button id="submit" onClick={handleClickSaveRecipientGift}>
              Update
          </Button>
      </Form>
  )

}

export default RecipientGiftEditForm