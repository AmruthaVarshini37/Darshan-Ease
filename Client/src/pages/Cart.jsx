import { Link } from "react-router-dom";

function Cart() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#8B0000",
          marginBottom: "40px",
        }}
      >
        🛒 My Cart
      </h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "#fff",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Cart"
          style={{
            width: "120px",
            marginBottom: "20px",
          }}
        />

        <h2>Your Cart is Empty</h2>

        <p
          style={{
            color: "gray",
            marginTop: "15px",
          }}
        >
          Book your Darshan tickets and they will appear here.
        </p>

        <Link to="/products">
          <button
            style={{
              marginTop: "25px",
              padding: "12px 25px",
              background: "#8B0000",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Browse Tickets
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;