import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')

  function addToCart() {
    setCartCount(cartCount + 1)
  }

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        setCurrentPage={setCurrentPage}
      />
      {currentPage === 'home' && <Home addToCart={addToCart} />}
      {currentPage === 'admin' && <Admin />}
    </div>
  )
}

export default App