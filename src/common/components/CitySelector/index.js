import React, { useState, useMemo } from "react";
import classnames from "classnames";
import "./index.css";

export default function CitySelector(props) {
  const { show, loading, data, onBack } = props;

  const [value, setValue] = useState("");
  const pureValue = useMemo(() => value.trim(), [value]);

  return (
    <div
      className={classnames("city-selector", {
        hidden: !show
      })}
    >
      <div className="city-search">
        <div className="city-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="search-input-wrapper">
          <input
            value={value}
            type="text"
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={e => setValue(e.target.value)}
          />
          <span
            className={classnames("search-clean", {
              hidden: pureValue.length === 0
            })}
            onClick={() => setValue("")}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
}
