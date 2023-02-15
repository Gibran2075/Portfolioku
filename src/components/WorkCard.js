/* eslint-disable jsx-a11y/img-redundant-alt */
import "./WorkCardStyles.css";

import React from "react";
import pro7 from "../assets/gymapp.png";
import pro1 from "../assets/webfilm.png";
import pro2 from "../assets/ecommerce.png";
import pro3 from "../assets/landingpageweb.png";
import pro4 from "../assets/sneakers.png";
import pro5 from "../assets/realtime.png";
import pro6 from "../assets/tictactoe.png";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro7} alt="" />
          <h2 className="project-title">Gym Exercise App</h2>
          <div className="pro-details">
            <p>
              This Gym Exerice App created using React JS framework, This website is already integrated with Rest API using Rapid API, using this website, the user can choose which part of the muscle they want to train using the card
              provided and the user can see examples of movements and videos related to these movements.
            </p>
            <div className="pro-btns">
              <a href="https://gym-app-exercise.netlify.app/" className="btn">
                View
              </a>
              <a href="https://github.com/Gibran2075/gym_exercise" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro1} alt="" />
          <h2 className="project-title">Film Website Design</h2>
          <div className="pro-details">
            <p>This film website was created using React JS framework, this website is made in a simple manner which consists of 4 sections, namely the navbar, hero section, trending and superhero.</p>
            <div className="pro-btns">
              <a href="https://gibran2075.github.io/webfilm/" className="btn">
                View
              </a>
              <a href="https://github.com/Gibran2075/webfilm" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro2} alt="" />
          <h2 className="project-title">Ecommerce Website Design</h2>
          <div className="pro-details">
            <p>This e-commerce website design is created using HTML, CSS, and JavaScript. I learned a lot of HTML, CSS and Javascript, this website has been made responsive on any device.</p>
            <div className="pro-btns">
              <a href="https://github.com/Gibran2075/webfilm" className="btn">
                View
              </a>
              <a href="https://github.com/Gibran2075/webfilm" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro3} alt="" />
          <h2 className="project-title">Landing Page Website</h2>
          <div className="pro-details">
            <p>landing page of this website is designed and made using simple html, css and bootstrap, this website has been designed responsive on any device, on this website i learned a lot of bootstrap.</p>
            <div className="pro-btns">
              <a href="https://gibran2075.github.io/company-landing-page.github.io/" className="btn">
                View
              </a>
              <a href="https://github.com/Gibran2075/company-landing-page.github.io" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro4} alt="" />
          <h2 className="project-title">Sneakers Store</h2>
          <div className="pro-details">
            <p>This website is a modern website that is designed according to current website trends such as slide animations and this website has been designed responsively on any device.</p>
            <div className="pro-btns">
              <a href="https://gibran2075.github.io/Sneaker-Store.github.io/" className="btn">
                View
              </a>
              <a href="https://github.com/Gibran2075/Sneaker-Store.github.io" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro5} alt="" />
          <h2 className="project-title">Real Times</h2>
          <div className="pro-details">
            <p>This website is a simple website created using basic HTML, CSS and Javascript. This website is made to train logic in Javascript language</p>
            <div className="pro-btns">
              <a href="https://github.com/Gibran2075/realtime.github.io" className="btn">
                View
              </a>
              <a href="https://gibran2075.github.io/realtime.github.io/" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro6} alt="" />
          <h2 className="project-title">Tic Tac Toe Games</h2>
          <div className="pro-details">
            <p>This website is a simple website created using basic HTML, CSS and Javascript. This website is made to train logic in javascript language</p>
            <div className="pro-btns">
              <a href="https://github.com/Gibran2075/Tic-Tac-Toe" className="btn">
                View
              </a>
              <a href="https://gibran2075.github.io/Tic-Tac-Toe/" className="btn">
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
