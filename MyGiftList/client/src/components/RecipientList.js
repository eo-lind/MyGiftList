import React, { useEffect, useState } from "react";
import { getAllRecipients } from "../modules/recipientManager"
import Recipient from "./Recipient";
import { Link } from "react-router-dom"

const RecipientList = () => {
  const [recipients, setRecipients] = useState([])

  // get all recipients
  const getRecipients = () => {
    getAllRecipients().then((recipients) => setRecipients(recipients))
  }

  useEffect(() => {
    getRecipients()
  }, [])

  return (
    <div className="container">
      <div>
        <Link to="/recipients/add">Add New Recipient</Link>
      </div>
      {/* ----------ALL RECIPIENTS---------- */}
      <div className="row justify-content-center">
        <h4>All Recipients</h4>
        {recipients.map((recipient) => (
          <Recipient recipient={recipient} key={recipient.id} />
        ))}
      </div>
    </div>
  )
}

export default RecipientList