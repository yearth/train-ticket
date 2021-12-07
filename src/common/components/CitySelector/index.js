import React from "react";
import classnames from "classnames";
import "./index.css";

export default function CitySelector(props) {
  const { show, loading, data } = props;

  return (
    <div
      className={classnames("city-selector", {
        hidden: !show
      })}
    >
      <div className="city-search">
        <div className="city-back">
          <svg width="42" height="42">
            <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}
