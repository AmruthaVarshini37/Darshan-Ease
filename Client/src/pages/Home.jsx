import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>

      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "white",
            textShadow: "3px 3px 10px black",
            marginBottom: "15px",
          }}
        >
          Welcome to Darshan Ease
        </h1>

        <p
          style={{
            fontSize: "25px",
            textShadow: "2px 2px 6px black",
          }}
        >
          Book Temple Darshan Tickets Online
        </p>
        <button
  style={{
    marginTop: "30px",
    padding: "15px 40px",
    background: "#FFD700",
    color: "black",
    border: "none",
    borderRadius: "8px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
  onClick={() => navigate("/products")}
>
  Book Now
</button>
      </div>

      {/* About Section */}

      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#f8f8f8",
        }}
      >
        <h2
          style={{
            color: "#8B0000",
            fontSize: "40px",
          }}
        >
          Why Choose Darshan Ease?
        </h2>

        <p
          style={{
            width: "70%",
            margin: "20px auto",
            fontSize: "20px",
            color: "#555",
            lineHeight: "35px",
          }}
        >
          Darshan Ease is a smart online temple booking platform that helps
          devotees book darshan tickets quickly and securely. No more long
          queues. Enjoy a hassle-free spiritual journey with online booking,
          secure payments, and instant confirmation.
        </p>
      </div>

      {/* Features */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "50px",
          flexWrap: "wrap",
          background: "white",
        }}
      >
        <div
          style={{
            width: "280px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 0 10px gray",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <h2>🛕</h2>
          <h3>Easy Booking</h3>
          <p>Book your darshan tickets within minutes.</p>
        </div>

        <div
          style={{
            width: "280px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 0 10px gray",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <h2>💳</h2>
          <h3>Secure Payment</h3>
          <p>100% Safe and Secure Payment System.</p>
        </div>

        <div
          style={{
            width: "280px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 0 10px gray",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <h2>📱</h2>
          <h3>24/7 Access</h3>
          <p>Book anytime from anywhere.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;