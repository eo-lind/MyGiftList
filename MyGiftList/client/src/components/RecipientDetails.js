import React, { useEffect, useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipient } from "../modules/recipientManager";
import { Link } from "react-router-dom"
import { deleteRecipientGift } from "../modules/recipientGiftManager";
import "./Custom.css"

const RecipientDetails = () => {
  const [recipient, setRecipient] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipient(id).then(setRecipient)
  }, [])


  const handleDeleteRecipientGift = (giftId) => {
    deleteRecipientGift(giftId).then(() => navigate("/recipients"))
  }

  if (!recipient) {
    return null
  }

  return (
      <div className="container">
          <div className="row justify-content-center">
              <h4>{recipient.name}</h4>
              <p>
                  <strong>Birthday:</strong> {recipient.birthday}
              </p>
              <hr />
              <h5>Gifts for {recipient.name}</h5>
          </div>
          {recipient.recipientGifts?.map((recipientGift) => (
              <Card key={"recipientGift__" + recipientGift.id}>
                  <CardBody>
                      <div>
                          <div className="gift-image-container">
                              <img
                                  src={recipientGift.gift.imageUrl}
                                  alt={"image of " + recipientGift.gift.name}
                                  className="gift-image"
                              />
                          </div>
                          <h6>{recipientGift.gift.name}</h6>
                          <p>
                              <strong>Notes:</strong> {recipientGift?.notes}
                          </p>
                          <p>
                              <strong>Quantity:</strong> {recipientGift.qty}
                          </p>
                          <p>
                              ${recipientGift.gift.price} |{" "}
                              <a
                                  href={recipientGift.gift.shopUrl}
                                  target="_blank"
                              >
                                  Buy
                              </a>
                          </p>
                          <Link to={`/recipientgifts/${recipientGift.id}/edit`}>
                              <Button className="row-button">Edit</Button>
                          </Link>
                          <Button
                              className="row-button" onClick={() =>
                                  handleDeleteRecipientGift(recipientGift.id)
                              }
                          >
                              Remove
                          </Button>
                      </div>
                  </CardBody>
              </Card>
          ))}
      </div>
  )
}

export default RecipientDetails
