import React, { useEffect, useState } from "react"
import { Card, CardBody, Button } from "reactstrap"
import { getAllGifts } from "../modules/giftManager"
import { getAllRecipients } from "../modules/recipientManager"
import { Link } from "react-router-dom"
import "./Custom.css"

const Home = () => {
    const [gifts, setGifts] = useState([])
    const [recipients, setRecipients] = useState([])

    const getGifts = () => {
        getAllGifts().then((gifts) => setGifts(gifts))
    }

    const getRecipients = () => {
      getAllRecipients().then((recipients) => setRecipients(recipients))
    }

    useEffect(() => {
        getGifts()
        getRecipients()
    }, [])

    return (
        <>
            <h2 className="page-header">Welcome to MyGiftList!</h2>
            <div className="home-main-container">
                {/* ---------- GIFT COLUMN ---------- */}
                <div className="home-card">
                    <CardBody>
                        <h5>Gifts</h5>
                        <Link to={`/gifts`}>
                            <button className="alternate-btn-1">
                                See Details + Assign
                            </button>
                        </Link>
                        <div>
                            {gifts.map((gift) => (
                                <Card
                                    key={"gift__" + gift.id}
                                    className="card-in-home-list"
                                >
                                    <CardBody>
                                        <div>
                                            <div className="gift-image-container">
                                                <img
                                                    src={gift.imageUrl}
                                                    alt={
                                                        "image of " + gift.name
                                                    }
                                                    className="gift-image"
                                                />
                                            </div>
                                            <h6>{gift.name}</h6>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </CardBody>
                </div>
                {/* ---------- RECIPIENT COLUMN ---------- */}
                <div className="home-card">
                    <CardBody >
                        <h5>Recipients</h5>
                        <Link to={`/recipients`}>
                            <button className="alternate-btn-1">See All</button>
                        </Link>
                        <div>
                            {recipients.map((recipient) => (
                                <Card
                                    key={"recipient__" + recipient.id}
                                    className="card-in-home-list"
                                >
                                    <CardBody>
                                        <div>
                                            <div className="recipient-image-container">
                                                <img
                                                    src={recipient.imageUrl}
                                                    alt={
                                                        "image of " + recipient.name
                                                    }
                                                    className="recipient-image"
                                                />
                                            </div>
                                            <h6>{recipient.name}</h6>
                                            <Link
                                                to={
                                                    "/recipients/" +
                                                    recipient.id
                                                }
                                            >
                                                <button className="alternate-btn-2">
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </CardBody>
                </div>
            </div>
        </>
    )
}

export default Home
