import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductList from "./products/ProductList";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div
          className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent
      bottom-0 z-10"
        />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          </div>
          {/* <div>
            <img
              loading="lazy"
              src="https://m.media-amazon.com/images/I/61xggsQhPgL._SX3000_.jpg"
              alt=""
            />
          </div> */}
          {/* <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div> */}
        </Carousel>
      </div>
      <ProductList />
    </>
  );
};

export default Banner;
