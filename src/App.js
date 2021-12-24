import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider, feedbackProvider} from './context/FeedbackContext'
// NB: feedback provider is not a default exort, that's why it's wrapped with curly braces

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header bgColor={'rgba(0,0,0,0.4)'} textColor={'#ff6a95'} />
                <div className="container">
                    <Routes>
                        <Route exact path='/' 
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        />
                        <Route path='/about' element={<AboutPage/>} />
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App