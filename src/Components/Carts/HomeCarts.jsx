import React from "react";
import "./HomeCarts.css";
import img_homecart1 from "../Assets/img_homecart1.avif";

const HomeCarts = () => {
  return (
    <div className="home-cart">
      <div className="left">
      <h1>Welcome to</h1>
      <h1>The World of </h1>
      <h1>Testy & Fresh Food. </h1>
      <p>
        Savor culinary delights on our food website, where diverse recipes and
        expert tips await. Join a community of enthusiasts and elevate your
        cooking experience to new heights.
      </p>
      <div className="btn">
      <input type="text" placeholder="Search..."/>
      <button>Search</button>
      </div>
      </div>
        <div className="right">
        <img src={img_homecart1} alt="" />
        

      </div>
    </div>
  );
};

export default HomeCarts;
