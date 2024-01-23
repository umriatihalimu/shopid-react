import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io5";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="" alt="" />
        <p>SHOPID</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <ul className="footer-icon-container">
          <li>
            <FaWhatsapp size={24} />
          </li>
          <li>
            <FaInstagram size={24} />
          </li>
          <li>
            <IoLogoPinterest size={24} />
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>Copyright @ 2024-All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
