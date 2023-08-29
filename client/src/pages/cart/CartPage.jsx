import React, { useEffect, useState } from "react";
import "./cartPage.css";
import { getData } from "../../services/userService";
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
    <div className="cartPage">
      <h1>Cart Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image </th>
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
              <img
                className="poster"
                src={item.strainId.img_url}
                alt="strain poster"
              />

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
