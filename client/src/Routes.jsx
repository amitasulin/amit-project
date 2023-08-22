import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllStrains from "./components/AllStrains/AllStrains";

// Pages
import HomePage from "./pages/Home";
import AgeRestriction from "./pages/AgeRestriction";
import Error404Page from "./pages/Error404Page";
import StrainDetailsPage from "./pages/StrainDetailsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ContactForm from "./components/ContactUs/ContactForm";
import Layout from "./pages/Layout";
import ShippingAndReturnPolicy from "./pages/ShippingAndReturnPolicy";
import FAQ from "./pages/FAQ";
import NewStrain from "./components/NewStrain/NewStrain";
import Users from "./components/Users/Users";
import Wishlist from "./components/Wishlist/Wishlist";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/Profile";
import OrdersPage from "./pages/OrdersPage";

const InitialScreen = () => {
  const [isAllowed, setIsAllowed] = useState(localStorage.getItem("isAllowed"));
  if (isAllowed) return <HomePage />;
  else {
    return <AgeRestriction setIsAllowed={setIsAllowed} />;
  }
};

export default function Main() {
  return (
    <div style={{ flex: 1 }}>
      <Layout>
        <Header />
        <MobileMenu />
        <div style={{ height: "100%", alignItems: "center" }}>
          <Routes>
            <Route path="/" element={<InitialScreen />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/strains/:strainId" element={<StrainDetailsPage />} />
            <Route path="/strains" element={<AllStrains />} />
            <Route path="/newStrain" element={<NewStrain />} />
            <Route path="/users" element={<Users />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contactus" element={<ContactForm />} />
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
    </div>
  );
}
