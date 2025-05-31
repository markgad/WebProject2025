import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/yehia.jpg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>تخفيضات للكل حبابي</h1>
        <p>فقط للحاجات الطرش</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
