import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import { addRecipient } from "../modules/recipientManager";

const RecipientForm = () => {
  const emptyRecipientObj = {
    name: "",
    imageUrl: "",
    birthday: ""
  }

  const [recipient, setRecipient] = useState(emptyRecipientObj)
  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    const value = evt.target.value
    const key = evt.target.id
    const recipientCopy = { ...recipient }
    recipientCopy[key] = value

    setRecipient(recipientCopy)
  }

  const handleSave = (evt) => {
    evt.preventDefault()

    addRecipient(recipient).then((res) => {
      navigate("/recipients")
    })
  }

  return (
      <div className="form-card-container">
          <Card className="form-card">
              <CardBody>
                  <Form>
                      <FormGroup className="mgl-form-group">
                          <Label for="name">
                              For whom would you like to shop?
                          </Label>
                          <Input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="gift recipient's name"
                              value={recipient.name}
                              onChange={handleInputChange}
                          />
                      </FormGroup>

                      <FormGroup className="mgl-form-group">
                          <Label for="birthday">What is their birthday?</Label>
                          <Input
                              type="date"
                              name="birthday"
                              id="birthday"
                              placeholder="gift recipient's birthday"
                              value={recipient.birthday}
                              onChange={handleInputChange}
                          />
                      </FormGroup>

                      <FormGroup className="mgl-form-group">
                          <Label for="imageUrl">
                              Grab a photo of them:
                          </Label>
                          <Input
                              type="text"
                              name="imageUrl"
                              id="imageUrl"
                              placeholder="image URL"
                              value={recipient.imageUrl}
                              onChange={handleInputChange}
                          />
                      </FormGroup>

                      <Button className="btn btn-primary" onClick={handleSave}>
                          Submit
                      </Button>
                  </Form>
              </CardBody>
          </Card>
      </div>
  )
}

export default RecipientForm