import React from "react";
import titleImg from "../img/Path 318.png";

function Title(propes) {
  return (
    <div className="main-title">
      <div className="title-img">
        <img src={titleImg} alt="title-img" />
      </div>
      <div className="sub-text">{propes.text}</div>
      <div className="title">{propes.title}</div>
    </div>
  );
}

export default Title;
