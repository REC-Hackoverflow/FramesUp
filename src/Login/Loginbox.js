import React from "react";
import "./Loginbox.css";
import Brandname from "../Signup/Brandname";
import Loginform from "./Loginform";

const Loginbox = () => {
  document.body.style.backgroundColor = "#161622";
  return (
    <div className="bname">
      <div className="brand">
        <Brandname />
      </div>
      <div className="in">
        <div className="inline">
          <div className="login-head">
            <h2>Welcome to FramesUp!</h2>
          </div>
          <Loginform />
        </div>
      </div>
    </div>
  );
};

export default Loginbox;