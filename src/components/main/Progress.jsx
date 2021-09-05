import React from "react";

const Progress = ({ title, value }) => {
  return (
    <div className="progress">
      <div className="progress-bar">
        <div className="inner" style={{ left: -(100 - value) + "%" }}></div>
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default Progress;
