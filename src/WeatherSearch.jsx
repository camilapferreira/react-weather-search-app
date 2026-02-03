import React, { useState } from "react";
import "./WeatherSearch.css";
import { useWeather } from "./Application/useWeather";
import ConvertTemperature from "./ConvertTemperature";

export default function WeatherSearch() {
  const {
    city,
    WeatherData,
    weekdays,
    handleSubmit,
    handleChange,
    formatDate,
  } = useWeather();

  return (
    <div className="container">
      <div className="weather-search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter city name"
                className="form-control search-input"
                onChange={handleChange}
                value={city}
              ></input>
            </div>
            <div className="col-3 p-0">
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
            <div className="col-6">
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
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <img src={WeatherData.icon} alt="weather icon" />
                <ConvertTemperature temperature={WeatherData.temperature} />
              </div>
            </div>
          </div>
        </div>

        <div className="WeatherForecast row">
          {weekdays.map((day) => (
            <div className="col">
              <div className="WeatherForecastPreview">
                <div className="forecast-time">Fri</div>
                <img
                  src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                  alt="weather icon"
                />
                <div className="forecast-temperature">
                  <span className="forecast-temperature-max">14°</span>
                  <span className="forecast-temperature-min">11°</span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
