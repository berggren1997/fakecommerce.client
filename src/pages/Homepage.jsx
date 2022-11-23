import Announcement from "../components/Announcement";
import Hero from "../components/Hero";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Announcement />
    </>
    // <div className="slider-container">
    //   <div className="slider-wrapper">
    //     <div className="img-container">
    //       <img src="/images/commercepic.png" className="slider-image" />
    //     </div>
    //     <div className="info-container">
    //       <h2 className="slider-title">ONLINE SHOPPING</h2>
    //       <h1 className="sub-title">MADE EASY</h1>
    //       <p className="slider-description">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum.
    //       </p>
    //       <button className="cta">
    //         <span className="hover-underline-animation"> Shop now </span>
    //         <svg
    //           viewBox="0 0 46 16"
    //           height="10"
    //           width="30"
    //           xmlns="http://www.w3.org/2000/svg"
    //           id="arrow-horizontal"
    //         >
    //           <path
    //             transform="translate(30)"
    //             d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
    //             data-name="Path 10"
    //             id="Path_10"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Homepage;
