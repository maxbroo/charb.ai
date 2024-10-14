import { toast as toastify, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toast = toastify;

export function ToastProvider() {
  return <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />;
}
