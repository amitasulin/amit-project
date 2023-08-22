import { useEffect } from "react";
import "./App.css";
import Main from "./Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  useEffect(() => {
    toast("test", {
      position: "bottom-right",
      autoClose: true,
      closeOnClick: true,
      theme: "light",
    });
  }, []);
  return (
    <div className="App">
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
