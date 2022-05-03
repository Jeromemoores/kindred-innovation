import { Navigation } from './Components/Navigation'
import { Footer, TopNav } from './Components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Style/main.css'
import './Style/font.css'

export default function App() {
  return (
    <>
      <TopNav />
      <Navigation />
      <Footer />
    </>
  )
}
