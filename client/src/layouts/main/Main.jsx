import { Routes, Route } from "react-router-dom";

//components
import Footer from '..//../Components/Footer/Footer'
import Header from '..//../Components/Header/Header'

// Pages
import HomePage from '..//../Components/Pages/Home'


export default function Main() {
  return (
    <div className="Main">
        <Header/>

    <Routes>
    <Route path="/" element={<HomePage/>} />
    {/* <Route path="*" element={<Error404Page/>} /> */}
    </Routes>


        <Footer/>
    </div>
  )
}
