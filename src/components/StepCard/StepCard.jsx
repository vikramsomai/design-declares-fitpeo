import React from "react";
import "./StepCard.css";

const StepCard = ({ number, title, description }) => {
  return (
    <div className="step-container">
      <div className="step-header">
        <div className="step-number">{number}</div>
        <div className="step-title">{title}</div>
      </div>
      <div className="step-description">{description}</div>
    </div>
  );
};

export default StepCard;
