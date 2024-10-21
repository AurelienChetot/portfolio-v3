// ToasterContainer.jsx
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
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

export const emailSucces = (message) => {
  toast.success(message);
};

export const emailError = (message) => {
  toast.error(message);
};

export const captchaError = (message) => {
  toast.error(message);
};

export default Toast;
