import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f4f4",
        padding: "50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#8B0000",
          marginBottom: "40px",
        }}
      >
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No Orders Found
        </h2>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              background: "#fff",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ color: "#8B0000" }}>
              {order.product?.name}
            </h2>

            <p>
              <b>User :</b> {order.user?.name}
            </p>

            <p>
              <b>Quantity :</b> {order.quantity}
            </p>

            <p>
              <b>Total :</b> ₹ {order.totalPrice}
            </p>

            <p>
              <b>Status :</b>

              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                {order.status}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;