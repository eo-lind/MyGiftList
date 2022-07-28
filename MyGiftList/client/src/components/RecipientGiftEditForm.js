import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getRecipientGiftById, updateRecipientGift } from "../modules/recipientGiftManager"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const RecipientGiftEditForm = () => {
    const [recipientGift, setRecipientGift] = useState({})
    const navigate = useNavigate()
    const { recipientGiftId } = useParams()

    useEffect(() => {
        getRecipientGiftById(recipientGiftId).then((resp) =>
            setRecipientGift(resp)
        )
    }, [])

    const handleInputChange = (evt) => {
        let target = { ...recipientGift }

        target[evt.target.id] = evt.target.value
        setRecipientGift(target)
    }

    const handleClickSaveRecipientGift = () => {
        updateRecipientGift(recipientGift).then(
            navigate(`/recipients/${recipientGift.recipientId}`)
        )
    }

    // https://thewebdev.info/2021/09/18/how-to-fix-the-a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-error-in-react/ (used to resolve controlled input issue)

    return (
        <Form>
            <h4>Edit {recipientGift.id}</h4>
            <FormGroup>
                <Label for="quantity">Quantity:</Label>
                <select
                    name="qty"
                    id="qty"
                    value={recipientGift.qty ?? ""}
                    onChange={handleInputChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </FormGroup>

            <FormGroup>
                <Label for="notes">Notes:</Label>
                <Input
                    type="text"
                    name="notes"
                    id="notes"
                    placeholder="Notes (size, color, etc.)"
                    value={recipientGift.notes ?? ""}
                    onChange={handleInputChange}
                />
            </FormGroup>
            <Button id="submit" onClick={handleClickSaveRecipientGift}>
                Update
            </Button>
        </Form>
    )
}

export default RecipientGiftEditForm