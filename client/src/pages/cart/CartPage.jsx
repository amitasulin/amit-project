import React, { useContext, useEffect, useState } from "react";
import "./CartPage.css";
import { UserContext } from "../../context/userContext";
import { getData } from "../../services/userService";

const initialOrders = [
  { id: 1, product: "Product 1", quantity: 2 },
  { id: 2, product: "Product 2", quantity: 3 },
  { id: 3, product: "Product 3", quantity: 1 },
];

function CartPage() {
  const [cart, setCart] = useState([]);

  const getUserData = async () => {
    const response = await getData();
    console.log(response.data);
    setCart(response.data.cart);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="OrdersPage">
      <h1>Cart Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item) => (
            <tr key={item.id}>
              <td>{item._id}</td>
              <td>{item.strainId.name}</td>
              <td>{item.strainId.price + "$"}</td>
              <td>{item.quantity}</td>
              <td>
                {Number(item.quantity) * Number(item.strainId.price) + "$"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
