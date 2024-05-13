import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import { GlobalConfigProvider } from "./context/global-config.context";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <GlobalConfigProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </GlobalConfigProvider>
  );
}

export default App;
