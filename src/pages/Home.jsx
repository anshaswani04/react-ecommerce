import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Home({ addToCart }) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Failed to fetch products. Please try again.')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="hero">
        <h2>Welcome to ShopReact 🛒</h2>
        <p>Find the best products at the best prices</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>

      <div className="products-section">
        <h2>Our Products</h2>

        {products.length === 0 ? (
          <p className="no-products">
            No products yet. Add some from the Admin Panel!
          </p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home