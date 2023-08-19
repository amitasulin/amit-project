import { useEffect } from "react";
import "./App.css";
import Main from "./layouts/main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
