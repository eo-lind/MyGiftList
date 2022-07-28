import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import "./image.css"
import { addRecipientGift } from "../modules/recipientGiftManager"
import { getAllRecipients } from "../modules/recipientManager"

// uses the gift prop to populate the card with specified properties from the gift object
const Gift = ({ gift }) => {
  const navigate = useNavigate()
  const selectedGiftId = gift.id

  // sets initial default state of recipientGift object
  const [recipientGift, setRecipientGift] = useState({
      recipientId: 0,
      giftId: selectedGiftId,
      qty: 1,
      notes: "",
  })

  // gets all of the recipients to populate dropdown
  const [recipients, setRecipients] = useState([])

  // sets state of recipientGift to connect recipientGift object's properties to input fields
  const handleControlledInputChange = (event) => {
      const newRecipientGift = { ...recipientGift }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
      }
      newRecipientGift[event.target.id] = selectedVal
      setRecipientGift(newRecipientGift)
  }

  // loads recipient data for dropdown and updates state
  useEffect(() => {
      getAllRecipients().then((recipients) => {
          setRecipients(recipients)
      })
  }, [])

  const handleClickSaveRecipientGift = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const recipientId = recipientGift.recipientId

      // checks to make sure a recipient has been selected before saving recipient gift record - if one hasn't been selected, user is presented with a popup reminding them to do so
      if (recipientId === 0) {
          window.alert("Please select a recipient")
      } else {
          //invokes addRecipientGift passing recipientGift as an argument.
          //once complete, changes the url and display the gifts list
          addRecipientGift(recipientGift).then(() => navigate(`/recipients/${recipientId}`))
      }
  }

  return (
      <Card>
          <CardBody>
              <div className="gift-image-container">
                  <img
                      src={gift.imageUrl}
                      alt="image of the gift"
                      className="gift-image"
                  />
              </div>
              <h5>{gift.name}</h5>
              <p>${gift.price}</p>
              <p>
                  Available{" "}
                  <a href={gift.shopUrl} target="_blank">
                      here
                  </a>
              </p>
              {/* <p><Link to={`/gifts/${gift.id}/give`}>Assign Gift</Link></p> */}

              {/* ---------- GIFT ASSIGNMENT FORM ---------- */}
              <form>
                  <h2 className="partyForm__title">Give A Gift</h2>
                  <FormGroup>
                      <Label for="Recipient">Select a Recipient:</Label>
                      <select
                          value={recipientGift.recipientId}
                          name="recipientId"
                          id="recipientId"
                          onChange={handleControlledInputChange}
                          className="form-control"
                      >
                          <option value="0">Select one</option>
                          {recipients.map((singleRecipient) => (
                              <option
                                  key={singleRecipient.id}
                                  value={singleRecipient.id}
                              >
                                  {singleRecipient.name}
                              </option>
                          ))}
                      </select>
                  </FormGroup>

                  <FormGroup>
                      <Label for="quantity">Quantity:</Label>
                      <select
                          value={recipientGift.qty}
                          name="qty"
                          id="qty"
                          onChange={handleControlledInputChange}
                          className="form-control"
                      >
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
                          value={recipientGift.notes}
                          onChange={handleControlledInputChange}
                      />
                  </FormGroup>

                  <FormGroup>
                      <Input
                          type="hidden"
                          name="gift"
                          id="gift"
                          value={selectedGiftId}
                          onChange={handleControlledInputChange}
                      />
                  </FormGroup>
                  <Button type="button" onClick={handleClickSaveRecipientGift}>
                      Add to List
                  </Button>
              </form>
          </CardBody>
      </Card>
  )
}

export default Gift