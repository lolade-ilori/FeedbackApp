import { v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react"

// Creating context, we are calling this context we create FeedbackContext
const FeedbackContext = createContext()

// We create a provider_ For our components to get access to our state in our context we wrap them in a provider
// FeedbackProvider takes in children because we a wrapping all our components
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 4
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 5
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 6
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // addFeedback receives the object created in FeedbackForm Component 
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // Remember the state is immutable so we can't just push on into it, we have to make a copy of it
        setFeedback([newFeedback, ...feedback])
    }

    // To delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            setFeedback(feedback.filter((item) => item.id !== id ))
        } 
    }

    // Update Feedback List
    const updateFeedback = (id, updFeedback) => {
        // We are calling setFeedback and areturnin an array that contains the new item
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updFeedback} : item ))
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
