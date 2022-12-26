/* eslint-disable jsx-a11y/img-redundant-alt */
import "./WorkCardStyles.css";

import React from "react";

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details"></div>
      <p>{props.text}</p>
      <div className="pro-btns">
        <NavLink to={props.view} className="btn">
          View
        </NavLink>
        <NavLink to={props.code} className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard;
