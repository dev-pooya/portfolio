import React from "react";
import react1 from "../../img/react-1.png";
import react2 from "../../img/react-2.png";
import ui1 from "../../img/UI-1.png";
import ui2 from "../../img/ui-2.png";
import ui3 from "../../img/ui-3.png";
import ui4 from "../../img/ui-4.png";
import ui5 from "../../img/ui-5.png";

const Card = ({ info }) => {
  let imgSrc;
  switch (info.img) {
    case "react1":
      imgSrc = react1;
      break;
    case "react2":
      imgSrc = react2;
      break;
    case "ui1":
      imgSrc = ui1;
      break;
    case "ui2":
      imgSrc = ui2;
      break;
    case "ui3":
      imgSrc = ui3;
      break;
    case "ui4":
      imgSrc = ui4;
      break;
    case "ui5":
      imgSrc = ui5;
      break;
  }
  return (
    <div className="card">
      <img src={imgSrc} />
      <div className="overlay">
        <span>{info.detail}</span>
      </div>
    </div>
  );
};

export default Card;
