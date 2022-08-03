import React from "react"; 
import { Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom"

// uses the recipient prop to populate the card with specified properties from the recipient object
const Recipient = ({ recipient}) => {
  return (
      <Card className="card-in-list">
          <CardBody>
              <div className="recipient-image-container">
                  <img
                      src={recipient.imageUrl}
                      alt={"image of " + recipient.name}
                      className="recipient-image"
                  />
              </div>
              <h5>{recipient.name}</h5>
              <p>
                  <strong>Birthday:</strong>{" "}
                  {new Date(recipient.birthday).toLocaleDateString('en-us', {month: "long", day: "numeric"})}
              </p>
              <p>
                  <Link to={"/recipients/" + recipient.id}>
                      <Button type="button">Details</Button>
                  </Link>
              </p>
          </CardBody>
      </Card>
  )
}

export default Recipient