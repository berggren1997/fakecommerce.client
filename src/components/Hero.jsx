import React from "react";
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const temp = () => {
    navigate("/products");
  };
  return (
    <>
      <section className="hero">
        <h2 className="slider-title">ONLINE SHOPPING</h2>
        <h1 className="sub-title">MADE EASY</h1>
        <p className="slider-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <button className="cta" onClick={temp}>
          <span className="hover-underline-animation"> Shop now </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </section>
    </>
  );
};

export default Hero;
