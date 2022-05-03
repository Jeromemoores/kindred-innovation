import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './Home'
import { SignIn_SignUp as Sisu} from './Account'
import { Model } from './Model'

export function Navigation() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signUp' element={<Sisu />} />
                <Route path='/signIn' element={<Sisu />} />
                <Route path='/model' element={<Model />} />
            </Routes>
        </Router>
    )
}