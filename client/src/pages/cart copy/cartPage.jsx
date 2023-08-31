import React, { useEffect, useState } from "react";
import "./cartPage.css";
import { getData, removeFromCart } from "../../services/userService";
import { MyContainer } from "../../components/MyContainer";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
function CartPage() {
  const [cart, setCart] = useState([]);

  const getUserData = async () => {
    const response = await getData();
    setCart(response.data.cart);
  };

  const deleteCartRow = async (strainId, quantity) => {
    try {
      const response = await removeFromCart(strainId, quantity);
      toast.success("Cart row deleted successfully");
      const cartItemIdx = cart.findIndex(
        (crt) => crt.strainId._id === strainId
      );
      const newCart = [...cart];
      newCart.splice(cartItemIdx, 1);
      setCart(newCart);
    } catch (e) {
      toast.error("Failed to delete cart row");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <MyContainer>
      <div className="cartPage">
        <h1>Cart Page</h1>
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image </th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr key={item._id}>
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
                <td style={{ width: "18rem" }}>
                  <Button
                    className="bi bi-trash3"
                    style={{
                      margin: "auto",
                      borderRadius: "100px",
                    }}
                    onClick={() => deleteCartRow(item.strainId._id, 1)}
                  ></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MyContainer>
  );
}

export default CartPage;
