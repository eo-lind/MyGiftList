import React from "react"; 
import { Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom"

// uses the recipient prop to populate the card with specified properties from the recipient object
const Recipient = ({ recipient}) => {
  return (
      <Card className="card-in-list">
          <CardBody>
              <h5>{recipient.name}</h5>
              <p>
                  <strong>Birthday:</strong> {recipient.birthday}
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