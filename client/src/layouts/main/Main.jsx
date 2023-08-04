import { Routes, Route } from "react-router-dom";

//components
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import AllStrains from "../../Components/AllStrains/AllStrains";

// Pages
import HomePage from "../../Components/Pages/Home";
import AgeRestriction from "../../Components/Pages/AgeRestriction";
import ContactUs from "../../Components/Pages/ContactUs";
import Error404Page from "../../Components/Pages/Error404Page";
import StrainDetailsPage from "../../Components/Pages/StrainDetailsPage";
import SignInPage from "../../Components/Pages/SignInPage";
import SignUpPage from "../../Components/Pages/SignUpPage";
import "bootstrap/dist/css/bootstrap.css";
export default function Main() {
  // const isNotFirstEntrance = localStorage.getItem("isFirstEntrance");
  return (
    <div className="Main">
      <Header />

      <Routes>
        <Route path="/test" element={<AgeRestriction />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/strains/:strainId" element={<StrainDetailsPage />} />
        <Route path="/strains" element={<AllStrains />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>

      <Footer />
    </div>
  );
}
