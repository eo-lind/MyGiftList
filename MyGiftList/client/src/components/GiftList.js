import React, { useEffect, useState } from "react"
import { getAllGifts } from "../modules/giftManager"
import Gift from "./Gift"
import { Link } from "react-router-dom"

const GiftList = () => {
    const [gifts, setGifts] = useState([])

    // get all gifts
    const getGifts = () => {
        getAllGifts().then((gifts) => setGifts(gifts))
    }

        useEffect(() => {
        getGifts()
    }, [])

    return (
        <div className="container">
            <h2 className="page-header">All Gifts</h2>
            <div>
                <Link to="/gifts/add"><button className="alternate-btn-1">Add New Gift</button></Link>
            </div>
            {/* ----------ALL GIFTS---------- */}
            <div className="card-container">
                {gifts.map((gift) => (
                    <Gift gift={gift} key={gift.id} />
                ))}
            </div>
        </div>
    )
}

export default GiftList