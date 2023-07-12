import { Routes, Route } from "react-router-dom";

//components
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

// Pages
import HomePage from '../../Components/Pages/Home'
import AgeRestriction from '../../Components/Pages/AgeRestriction'
import ProductGallery from '../../Components/Pages/ProductGallery'
import About from '../../Components/Pages/About'
import Error404Page from "../../Components/Pages/Error404Page";

export default function Main() {
  return (
    <div className="Main">
      <Header/>
    
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/test" element={<AgeRestriction/>} />
    <Route path="/productGallery" element={<ProductGallery/>} />
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<Error404Page/>} />
    </Routes>

        <Footer/>
    </div>
  )
}
