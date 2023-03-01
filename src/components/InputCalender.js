import React from "react";
import "./InputCalendar.css";
const InputCalender = () => {
  return (
    <div className="input_cover">
      <img src="/calendar.png" alt="" className="cal_img" />
      <div className="search">
        <input
          type="text"
          placeholder="Search Vendar/ Rider"
          className="search_input"
        />
        <img src="/search.png" alt="" className="search_img" />
      </div>
    </div>
  );
};

export default InputCalender;
