    function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>My Ecommerce Store</h1>
            </div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/cart">Cart</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
    }

export default Navbar
