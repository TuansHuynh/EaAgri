import { useEffect } from "react";
import "./styles/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  
    useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);
  
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
  
}

export default App
