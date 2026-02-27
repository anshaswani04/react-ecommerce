import { useState } from 'react'

function Admin() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [stock, setStock] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            price: parseFloat(price),
            category,
            image,
            description,
            stock: parseInt(stock)
          })
        }
      )

      const data = await response.json()

      if (data.success) {
        setMessage({ type: 'success', text: 'Product added successfully! ✅' })
        setTitle('')
        setPrice('')
        setCategory('')
        setImage('')
        setDescription('')
        setStock('')
      } else {
        setMessage({ type: 'error', text: 'Failed to add product. Try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Try again.' })
    }

    setLoading(false)
  }

  return (
    <div className="admin-container">
      <h2>Admin Panel — Add New Product</h2>

      {message && (
        <p className={message.type === 'success' ? 'success-msg' : 'error-msg'}>
          {message.text}
        </p>
      )}

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price (e.g. 29.99)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category (e.g. Electronics)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  )
}

export default Admin