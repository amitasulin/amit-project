import "./App.css";
import Main from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Main />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
