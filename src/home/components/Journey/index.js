import React from "react";
import "./index.css";

export default function Journey(props) {
  const { from, to, showCitySelector, exchangeFromTo } = props;
  return (
    <div className="journey">
      <div className="journey-station" onClick={() => showCitySelector(true)}>
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="journey-input journey-from"
        />
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        x
      </div>
      <div className="journey-station" onClick={() => showCitySelector(false)}>
        <input type="text" readOnly name="to" value={to} className="journey-input journey-to" />
      </div>
    </div>
  );
}
