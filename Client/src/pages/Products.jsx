import { useEffect, useState } from "react";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹ {product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;