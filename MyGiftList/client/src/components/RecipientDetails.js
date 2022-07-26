import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";
import Recipient from "./Recipient";
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
                  <strong></strong>
              </p>
              <div>
                  {recipient.recipientGifts?.map((recipientGift) => (
                      <div key={"recipientGift__" + recipientGift.id}>
                          <p>
                              <strong>Birthday:</strong> {recipient.birthday}
                          </p>
                          <hr />
                              <h5>Gifts for {recipient.name}:</h5>
                          {recipient.recipientGifts?.map((singleGift) => (
                              <Card>
                                  <CardBody>
                                      <div className="gift-image-container">
                                          <img
                                              src={singleGift.gift.imageUrl}
                                              alt="image of the gift"
                                              className="gift-image"
                                          />
                                      </div>
                                      <h6 key={singleGift.id}>
                                          {singleGift.gift.name}
                                      </h6>
                                      <p>${singleGift.gift.price}</p>
                                      <p>
                                          Available{" "}
                                          <a
                                              href={singleGift.gift.shopUrl}
                                              target="_blank"
                                          >
                                              here
                                          </a>
                                      </p>
                                  </CardBody>
                              </Card>
                          ))}
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default RecipientDetails
