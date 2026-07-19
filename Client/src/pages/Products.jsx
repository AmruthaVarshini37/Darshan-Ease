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
  const bookTicket = async (product) => {
  try {
    const token = localStorage.getItem("token");

    const profile = await API.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await API.post(
      "/orders",
      {
        user: profile.data._id,
        product: product._id,
        quantity: 1,
        totalPrice: product.price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Darshan Ticket Booked Successfully");
  } catch (error) {
    console.log(error);
    alert("Booking Failed");
  }
};
  return (
    <div
      style={{
        padding: "50px 20px",
        background: "#f8f8f8",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#8B0000",
          fontSize: "55px",
          marginBottom: "50px",
          fontWeight: "bold",
        }}
      >
        🛕 Darshan Tickets
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "35px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              width: "340px",
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 18px 35px rgba(0,0,0,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.15)";
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700"
              alt="Temple"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  color: "#8B0000",
                  marginBottom: "12px",
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: "24px",
                  minHeight: "60px",
                }}
              >
                {product.description}
              </p>

              <h2
                style={{
                  color: "green",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                ₹ {product.price}
              </h2>

              <span
                style={{
                  background: "#FFD54F",
                  color: "#333",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                {product.category}
              </span>
              <button
  style={{
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    background: "#8B0000",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "17px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  }}
  onClick={() => bookTicket(product)}
  onMouseOver={(e) => {
    e.target.style.background = "#B22222";
  }}
  onMouseOut={(e) => {
    e.target.style.background = "#8B0000";
  }}
>
  🛕 Book Darshan
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;