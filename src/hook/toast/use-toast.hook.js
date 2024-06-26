import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useToast() {
  const navigate = useNavigate();
  const [, setUser] = useGlobalUser();

  function toastSuccess(message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function toastWarning(error) {
    let errorMessage = error;
    if (error.response) errorMessage = error.response.data.message;

    toast.warn(errorMessage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function toastError(error) {
    if (error.response.data) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      playWrong();

      return;
    } else {
      toast.error("Ocorreu um erro.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUser(null);
      playWrong();
      navigate("/login");
    }
  }

  return { toastSuccess, toastWarning, toastError };
}
