import { Routes, Route } from "react-router-dom";

//components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import AllStrains from '../../Components/AllStrains/AllStrains';

// Pages
import HomePage from '../../Components/Pages/Home';
import AgeRestriction from '../../Components/Pages/AgeRestriction';
import About from '../../Components/Pages/About';
import Error404Page from "../../Components/Pages/Error404Page";
import Login from "../../Components/Pages/Login";
import StrainDetailsPage from "../../Components/Pages/StrainDetailsPage";
import SignInPage from "../../Components/Pages/SignInPage";


export default function Main() {
  return (
    <div className="Main">
      <Header/>
    
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signin" element={<SignInPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/test" element={<AgeRestriction/>} />
    <Route path="/strains/:strainId" element={<StrainDetailsPage/>} />
    <Route path="/strains" element={<AllStrains/>} />
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<Error404Page/>} />
    </Routes>

        <Footer/>
    </div>
  )
}
