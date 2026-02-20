import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
  },
     {
    id: 2,
    title: "Men's Casual T-Shirt",
    price: 22.99,
    category: "Clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 3,
    title: "Gold Diamond Ring",
    price: 899.99,
    category: "Jewelry",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg"
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 149.99,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  },
  {
    id: 5,
    title: "Women's Jacket",
    price: 56.99,
    category: "Clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 49.99,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
  }
]

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h2>Welcome to Our Store</h2>
                <p>find the best products at the best prices</p>
                <button className="shop-now-btn">Shop Now</button>
            </div>

            <div className="product-section">
                <h2>our products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home