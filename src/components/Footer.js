import "./FooterStyles.css";

import React from "react";

import { FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Padang,</p>
              <p>Sumatera Barat.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +6283185672592
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> m.giibraan@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>Hello, this me Muhammad Gibran. Im looking to collaborate as Junior Front-End Web Developer</p>
          <div className="social">
            <a href="https://www.instagram.com/mhd_gbrn/">
              <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/Gibran2075">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
