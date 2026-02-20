import { useState } from "react"    
    
    
    function Navbar() {
        const [cartCount, setCartCount] = useState(0)
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>My Ecommerce Store</h1>
            </div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/cart" className="cart-link">Cart 🛒<span className="cart-count">{cartCount}</span></a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
    }

export default Navbar
