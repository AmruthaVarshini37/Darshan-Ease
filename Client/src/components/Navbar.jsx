import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout Successful");
    navigate("/login");
  };

  return (
    <nav>
      <h2>Darshan Ease</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/orders">Orders</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link> |{" "}

      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;