import { Routes, Route } from "react-router-dom";

//components
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import AllStrains from "../../Components/AllStrains/AllStrains";

// Pages
import HomePage from "../../Components/Pages/Home";
import AgeRestriction from "../../Components/Pages/AgeRestriction";
import Error404Page from "../../Components/Pages/Error404Page";
import StrainDetailsPage from "../../Components/Pages/StrainDetailsPage";
import SignInPage from "../../Components/Pages/SignInPage";
import SignUpPage from "../../Components/Pages/SignUpPage";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "../../Components/ContactUs/ContactForm";
import Layout from "../../Components/Pages/Layout";
import ShippingAndReturnPolicy from "../../Components/Pages/ShippingAndReturnPolicy";
import FAQ from "../../Components/Pages/FAQ";
import NewStrain from "../../Components/NewStrain/NewStrain";
import Users from "../../Components/Users/Users";
import Wishlist from "../../Components/Wishlist/Wishlist";
import { MobileMenu } from "../../Components/MobileMenu/MobileMenu";
import AboutPage from "../../Components/Pages/AboutPage";
import { useState } from "react";
import Cart from "../../Components/Pages/Cart";
import Orders from "../../Components/Pages/Orders";
import Profile from "../../Components/Pages/Profile";

const InitialScreen = () => {
  const [isAllowed, setIsAllowed] = useState(localStorage.getItem("isAllowed"));
  if (isAllowed) return <HomePage />;
  else {
    return <AgeRestriction setIsAllowed={setIsAllowed} />;
  }
};

export default function Main() {
  return (
    <div className="Main">
      <Layout>
        <Header />
        <MobileMenu />
        <div>
          <Routes>
            <Route path="/" element={<InitialScreen />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/strains/:strainId" element={<StrainDetailsPage />} />
            <Route path="/strains" element={<AllStrains />} />
            <Route path="/newStrain" element={<NewStrain />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
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
