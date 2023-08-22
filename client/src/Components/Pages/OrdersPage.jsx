import React, { useState } from "react";
import "./OrdersPage.css";

const initialOrders = [
  { id: 1, product: "Product 1", quantity: 2 },
  { id: 2, product: "Product 2", quantity: 3 },
  { id: 3, product: "Product 3", quantity: 1 },
];

function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);

  return (
    <div className="OrdersPage">
      <h1>Orders Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
