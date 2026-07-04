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
    <div>
      <h2>Orders</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{order.product?.name}</h3>

          <p>User : {order.user?.name}</p>

          <p>Quantity : {order.quantity}</p>

          <p>Total : ₹{order.totalPrice}</p>

          <p>Status : {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;