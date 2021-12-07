import React from "react";
import "./index.css";

export default function CitySelector(props) {
  const { show, loading, data } = props;

  return <div className={["city-selector", !show && "hidden"].filter(Boolean).join(" ")}></div>;
}
