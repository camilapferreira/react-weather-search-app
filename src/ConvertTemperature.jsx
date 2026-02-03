import React, { useState } from "react";
import "./WeatherSearch.css";

export default function ConvertTemperature({ temperature }) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature-value">
        <strong>{temperature}</strong>
        <span className="units">
          <a href="/">°C</a> |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    const fahrenheit = (temperature * 9) / 5 + 32;

    return (
      <div className="temperature-value">
        <strong>{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | <a href="/">°F</a>
        </span>
      </div>
    );
  }
}
