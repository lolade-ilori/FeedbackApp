import FeedbackItem from "./FeedbackItem"
import  {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
    // Accessing the data from Our context 'FeedbackContext'
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {
                feedback.map((item) => (
                    <FeedbackItem key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default FeedbackList
