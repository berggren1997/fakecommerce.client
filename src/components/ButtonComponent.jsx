import React from "react";
import "../styles/btn.css";

const ButtonComponent = ({ children, clickEvent }) => {
  return (
    <button onClick={clickEvent} className="cta">
      <span className="hover-underline-animation">{children}</span>
    </button>
  );
};

export default ButtonComponent;
