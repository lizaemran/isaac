import React from "react";
import "./Topbutton.css";
const TopButtons = () => {
  return (
    <div className="head_cover">
      <div className="button_cover">
        <div className="qty">Quality</div>
        <div className="performance">Performance</div>
      </div>
      <img src="/pencil.png" alt="" className="edit_img" />
    </div>
  );
};

export default TopButtons;
