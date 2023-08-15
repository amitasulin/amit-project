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

export default function Main() {
  return (
    <div className="Main">
      <Layout>
        <Header />

        <Routes>
          <Route path="/test" element={<AgeRestriction />} />
          <Route path="/" element={<HomePage />} />
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
        <Footer />
      </Layout>
    </div>
  );
}
