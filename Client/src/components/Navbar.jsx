import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#8B0000",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>
        🛕 Darshan Ease
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/products">Products</Link>
        <Link style={linkStyle} to="/cart">Cart</Link>
        <Link style={linkStyle} to="/orders">Orders</Link>
        <Link style={linkStyle} to="/profile">Profile</Link>
        <Link style={linkStyle} to="/login">Login</Link>
        <Link style={linkStyle} to="/register">Register</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
};

export default Navbar;