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

export default function Main() {
  const isAllowed = localStorage.getItem("isAllowed");

  return (
    <div className="Main">
      <Layout>
        <Header />
        <MobileMenu />
        <div style={{ border: "1px solid blue", display: "flex", flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={isAllowed ? <HomePage /> : <AgeRestriction />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/strains/:strainId" element={<StrainDetailsPage />} />
            <Route path="/strains" element={<AllStrains />} />
            <Route path="/newStrain" element={<NewStrain />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cart" element={<NewStrain />} />
            <Route path="/orders" element={<NewStrain />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/contactus" element={<ContactForm />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="*" element={<Error404Page />} />
            <Route
              path="/shippingAndReturnPolicy"
              element={<ShippingAndReturnPolicy />}
            />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}
