import "./HeroimgStyles.css";

import React from "react";

import Introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

function Heroimg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <h1 className="font">HI, I'M MUHAMMAD GIBRAN</h1>
        <p>I'M A JUNIOR FRONTEND DEVELOPER</p>
        <h1>WEB DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
