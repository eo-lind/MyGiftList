import React from "react"
import { Card, CardBody } from "reactstrap"
import "./image.css"

// uses the gift prop to populate the card with specified properties from the gift object
const Gift = ({ gift }) => {
  return (
    <Card>
        <CardBody>
            <div className="gift-image-container">
                <img src={gift.imageUrl} alt="image of the gift" className="gift-image" />
            </div>
            <h5>{gift.name}</h5>
            <p>${gift.price}</p>
            <p>
                Available <a href={gift.shopUrl} target="_blank">here</a>
            </p>
        </CardBody>
    </Card>
  )
}

export default Gift