import React from "react"; 
import { Card, CardBody } from "reactstrap";

// uses the recipient prop to populate the card with specified properties from the recipient object
const Recipient = ({ recipient}) => {
  return (
    <Card>
      <CardBody>
        <h5>{recipient.name}</h5>
        <p>
          <strong>Birthday:</strong> {recipient.birthday}
        </p>
      </CardBody>
    </Card>
  )
}

export default Recipient