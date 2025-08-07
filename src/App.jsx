import Approuter from "./Router/Approuter"
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);
  return (
    <>
      <Approuter />
      <ToastContainer />
    </>
  )
}
