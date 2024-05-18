import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import { GlobalConfigProvider } from "./context/global-config.context";
import "react-toastify/dist/ReactToastify.css";

function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  return (
    <GlobalConfigProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </GlobalConfigProvider>
  );
}

export default App;
