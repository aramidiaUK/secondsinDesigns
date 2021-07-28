import React from "react";
import { NavLink } from "react-router-dom";
import "./Ticker.scss";
const Ticker = () => {
  return (
    <div className="ticker__container">
        <div className="ticker__container-header">Latest <span>news</span></div>
      <div className="ticker-wrap">
        <div className="ticker-move">
          <NavLink to="/" className="ticker-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </NavLink>
          <NavLink to="/pricing" className="ticker-item">Aliquam consequat varius consequat.</NavLink>
          <NavLink to="/register" className="ticker-item">
            Fusce dapibus turpis vel nisi malesuada sollicitudin.
          </NavLink>
          <div className="ticker-item">
            Pellentesque auctor molestie orci ut blandit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
