import { Navigation } from './Components/Navigation'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Style/main.css'
import './Style/font.css'
import { Footer, TopNav } from './Components/Navbar'

export default function App() {
  return (
    <>
      <TopNav />
      <Navigation />
      <Footer />
    </>
  )
}
