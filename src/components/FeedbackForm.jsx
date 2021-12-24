import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"


function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
        
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        }else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            // First thing is to create a new object that receives the feedback inputed by the user
            const newFeedback = {
                text: text,
                rating: rating,
            }

            // updateFeedback
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback )
            }else {
                addFeedback(newFeedback)
                // Here you're sending the values into the function handleAdd that is also a prop, so you're sending to where thre prop was created
            }
            
            setText('')
            // This is setting the input field empty again

        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>{`How would you rate your service with us ?`}</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                {/* NB: Using props you can also pass values from children to parent, vice versa is already known */}
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>{`Send`}</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
