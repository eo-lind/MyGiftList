import React from "react"; 
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom"

// uses the recipient prop to populate the card with specified properties from the recipient object
const Recipient = ({ recipient}) => {
  return (
    <Card>
      <CardBody>
        <h5><Link to={"/recipients/" + recipient.id}>{recipient.name}</Link></h5>
        <p>
          <strong>Birthday:</strong> {recipient.birthday}
        </p>
      </CardBody>
    </Card>
  )
}

export default Recipient