import React, { useEffect, useState } from "react"
import { getAllGifts } from "../modules/giftManager"
import Gift from "./Gift"

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
            {/* ----------ALL GIFTS---------- */}
            <div className="row justify-content-center">
                <h4>All Gifts</h4>
                {gifts.map((gift) => (
                    <Gift gift={gift} key={gift.id} />
                ))}
            </div>
        </div>
    )
}

export default GiftList
