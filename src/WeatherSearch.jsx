import React, { useState } from "react";
import "./WeatherSearch.css";
import { useWeather } from "./Application/useWeather";
import ConvertTemperature from "./ConvertTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherSearch() {
  const {
    city,
    WeatherData,
    weekdays,
    handleSubmit,
    handleChange,
    formatDate,
    searchInput,
  } = useWeather();

  return (
    <div className="container">
      <div className="weather-search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9 col-12 mb-2">
              <input
                type="text"
                placeholder="Enter city name"
                className="form-control search-input"
                onChange={handleChange}
                value={searchInput}
              ></input>
            </div>
            <div className="col-sm-3 col-12">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              ></input>
            </div>
          </div>
        </form>
        <div className="Weather-info">
          <div className="row">
            <div className="col-md-6 col-12">
              <h1>{WeatherData.city}</h1>
              <ul>
                <li>
                  <span>{formatDate(WeatherData.date)}</span>,{" "}
                  {WeatherData.condition}
                </li>
                <li>
                  Humidity: <strong>{WeatherData.humidity}%</strong>, Wind:{" "}
                  <strong>{WeatherData.wind} km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <div className="temperature-container d-flex justify-content-end">
                <img src={WeatherData.icon} alt="weather icon" />
                <ConvertTemperature temperature={WeatherData.temperature} />
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast weekdays={weekdays} city={city} />
      </div>
      <footer>
        This project was developed by Camila Ferreira and it is open source on{" "}
        <a
          href="https://github.com/camilapferreira/react-weather-search-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-search-react-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
