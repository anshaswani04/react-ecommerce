function ProductCard({ image, title, price, category }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-category">{category}</p>
    <div className="product-bottom">
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
    </div>
      </div>
    </div>
  );
}
export default ProductCard