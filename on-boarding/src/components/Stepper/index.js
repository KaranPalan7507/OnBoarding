import React from "react";
import "./style.scss";
export default function Stepper({ steps, activeItem = 1 }) {
  const renderSteps = () => {
    const stepsEl = [];
    for (let i = 1; i <= steps; i++) {
      let className = "stepper-item";
      if (i === 1) {
        className += " first-item";
      }
      if (i === steps) {
        className += " last-item";
      }
      if (i <= activeItem) {
        className += " active-item";
      }
      stepsEl.push(
        <li className={className}>
          <span>{i}</span>
        </li>
      );
    }
    return <ul>{stepsEl}</ul>;
  };
  return <div className="stepper-wrapper">{renderSteps()}</div>;
}
