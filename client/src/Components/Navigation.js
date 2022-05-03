import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './Home'

export function Navigation() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}