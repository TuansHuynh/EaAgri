// import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import "./styles/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
    useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);
  
  return <HomePage />;
  
}

export default App
