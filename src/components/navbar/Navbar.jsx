import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.img
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          src="/logo.png"
        ></motion.img>
        <div className="social">
          <a href="https://www.linkedin.com/in/pesicnikola/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/pesicnikola023" target="_blank">
            <img src="/github.png" alt="github" />
          </a>
          <a href="https://www.facebook.com/NPesic93/" target="_blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/johnnie.pannonie/" target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
