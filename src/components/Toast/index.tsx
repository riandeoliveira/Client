import { ToastContainer } from "react-toastify";

export const ToastBox = (): JSX.Element => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      limit={5}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
