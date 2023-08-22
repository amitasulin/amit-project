import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Pages
import HomePage from "./pages/Home";
import AgeRestriction from "./pages/AgeRestriction";
import Error404Page from "./pages/Error404Page";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./pages/Layout";
import ShippingAndReturnPolicy from "./pages/ShippingAndReturnPolicy";
import FAQ from "./pages/FAQ";
import Wishlist from "./pages/wishlist/wishlist";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/Profile";
import OrdersPage from "./pages/OrdersPage";
import ProductList from "./pages/productList/productList";
import CreateEditProduct from "./pages/createEditProduct/createEditProduct";
import ProductDetails from "./pages/productDetails/productDetails";
import ContactUs from "./pages/contactUs/contactUs";
import CartPage from "./pages/cart/cartPage";
import Users from "./pages/users/users";

const InitialScreen = () => {
  const [isAllowed, setIsAllowed] = useState(localStorage.getItem("isAllowed"));
  if (isAllowed) return <HomePage />;
  else {
    return <AgeRestriction setIsAllowed={setIsAllowed} />;
  }
};

export default function Main() {
  return (
    <Layout>
      <Header />
      <MobileMenu />
      <div style={{ height: "100%", alignItems: "center" }}>
        <Routes>
          <Route path="/" element={<InitialScreen />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/strains/:strainId" element={<ProductDetails />} />
          <Route path="/strains" element={<ProductList />} />
          <Route path="/newStrain" element={<CreateEditProduct />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Error404Page />} />
          <Route
            path="/shippingAndReturnPolicy"
            element={<ShippingAndReturnPolicy />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </Layout>
  );
}
