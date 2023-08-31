import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import "./wishlist.css";
import { Product } from "../productList/Product";
import { MyContainer } from "../../components/MyContainer";
import { UserContext } from "../../context/userContext";

export default function Wishlist() {
  const { userData, setUserData } = useContext(UserContext);

  const wishlist = userData?.wishlist;
  const removeFromWishlist = (strainId) =>
    setUserData({
      ...userData,
      wishlist: userData.wishlist.filter((str) => str._id !== strainId),
    });

  const addToWishlist = (strain) =>
    setUserData({ ...userData, wishlist: [strain, ...userData.wishlist] });

  return (
    <MyContainer>
      <Row>
        <h1>Wishlist</h1>
        {!wishlist?.length ? (
          <div>Wishlist is empty</div>
        ) : (
          wishlist.map((strain) => (
            <Product
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              isWishlist={true}
              key={strain._id}
              product={strain}
            />
          ))
        )}
      </Row>
    </MyContainer>
  );
}
