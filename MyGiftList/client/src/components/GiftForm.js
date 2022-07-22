import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addGift } from "../modules/giftManager";

const GiftForm = () => {
  const emptyGiftObj = {
    name: "",
    shopUrl: "",
    imageUrl: "",
    price: 0.0
  }

  const [gift, setGift] = useState(emptyGiftObj)
  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    const value = evt.target.value
    const key = evt.target.id
    const giftCopy = { ...gift }
    giftCopy[key] = value
    
    setGift(giftCopy)
  }

  const handleSave = (evt) => {
    evt.preventDefault()

    addGift(gift).then((taco) => {
      navigate("/gifts")
    })
  }

  return (
      <Form>
          <FormGroup>
              <Label for="name">What is the gift?</Label>
              <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="gift name"
                  value={gift.name}
                  onChange={handleInputChange}
              />
          </FormGroup>

          <FormGroup>
              <Label for="shopUrl">Where can you buy it?</Label>
              <Input
                  type="text"
                  name="shopUrl"
                  id="shopUrl"
                  placeholder="store URL"
                  value={gift.shopUrl}
                  onChange={handleInputChange}
              />
          </FormGroup>

          <FormGroup>
              <Label for="imageUrl">Grab a photo of the gift:</Label>
              <Input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="image URL"
                  value={gift.imageUrl}
                  onChange={handleInputChange}
              />
          </FormGroup>

          <FormGroup>
              <Label for="price">How much is it?</Label>
              <Input
                  type="number"
                  min="0.01"
                  name="price"
                  id="price"
                  placeholder="0.00"
                  value={gift.price}
                  onChange={handleInputChange}
              />
          </FormGroup>

          <Button className="btn btn-primary" onClick={handleSave}>
            Submit
          </Button>
      </Form>
  )

}

export default GiftForm