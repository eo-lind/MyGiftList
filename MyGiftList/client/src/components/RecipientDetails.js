import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";
import { getRecipient } from "../modules/recipientManager";
import { Link } from "react-router-dom"

const RecipientDetails = () => {
  const [recipient, setRecipient] = useState();
  const { id } = useParams();

  useEffect(() => {
    getRecipient(id).then(setRecipient)
  }, [])

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
              <Card>
                  <CardBody>
                      <div key={"recipientGift__" + recipientGift.id}>
                          <div className="gift-image-container">
                              <img
                                  src={recipientGift.gift.imageUrl}
                                  alt={"image of " + recipientGift.gift.name}
                                  className="gift-image"
                              />
                          </div>
                          {/* TODO: make sure this link works properly once gift details view is built */}
                          <h6><Link to={"/gifts/" + recipientGift.gift.id}>{recipientGift.gift.name}</Link></h6>
                          <p>
                              <strong>Notes:</strong> {recipientGift?.notes}
                          </p>
                          <p>
                              <strong>Quantity:</strong> {recipientGift.qty}
                          </p>
                          <p>
                              ${recipientGift.gift.price} |{" "}
                              <a href={recipientGift.gift.shopUrl} target="_blank">
                                  Buy
                              </a>
                          </p>
                      </div>
                  </CardBody>
              </Card>
          ))}
      </div>
  )
}

export default RecipientDetails
