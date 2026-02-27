function Navbar({ cartCount, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1
          onClick={() => setCurrentPage('home')}
          style={{ cursor: 'pointer' }}
        >
          🛒 ShopReact
        </h1>
      </div>
      <div className="navbar-links">
        <a onClick={() => setCurrentPage('home')} href="#">Home</a>
        <a onClick={() => setCurrentPage('admin')} href="#">Admin</a>
        <a href="#" className="cart-link">
          Cart 🛒 <span className="cart-count">{cartCount}</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar