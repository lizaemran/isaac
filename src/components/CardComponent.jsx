import React from "react";
import "./CardComponent.css";
function CardComponent({
  Img,
  Head,
  Percent,
  Gimg,
  value,
  btnTxt,
  Class,
  btnClass,
  mar,
}) {
  return (
    <div className={"card_cover " + mar}>
      <img src={Img} alt="" className="label_img" />
      <h1 className="header_card">{Head}</h1>
      <div className="card_percent">
        <p className="card_Per">{Percent}</p>
        <div className="card_scale">
          <img src={Gimg} alt="" className={"card_Gimg " + Class} />
          <p className={"card_grade " + Class}>{value}</p>
        </div>
      </div>
      <button className={"card_button " + btnClass}>{btnTxt}</button>
    </div>
  );
}

export default CardComponent;
