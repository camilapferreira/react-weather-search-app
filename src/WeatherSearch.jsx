import React, { useState } from "react";
import "./WeatherSearch.css";
import { useWeather } from "./Application/useWeather";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [WeatherData, setWeatherData] = useState({});
  const hook = useWeather();

  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      hook(city).then(showData);
    }
  }

  function showData(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      city: response.data.city,
    });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

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
                value={WeatherData.city}
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
                  <span>Friday 13:18</span>, {WeatherData.condition}
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
                <div className="temperature-value">
                  <strong>{WeatherData.temperature}</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="WeatherForecast row">
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
          <div className="col">
            <div className="WeatherForecastPreview">
              <div className="forecast-time">Sat</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div className="forecast-temperature">
                <span className="forecast-temperature-max">15°</span>
                <span className="forecast-temperature-min">11°</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecastPreview">
              <div className="forecast-time">Sun</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div className="forecast-temperature">
                <span className="forecast-temperature-max">14°</span>
                <span className="forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecastPreview">
              <div className="forecast-time">Mon</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div className="forecast-temperature">
                <span className="forecast-temperature-max">15°</span>
                <span className="forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecastPreview">
              <div className="forecast-time">Tue</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div className="forecast-temperature">
                <span className="forecast-temperature-max">15°</span>
                <span className="forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        This project was developed by Camila Ferreira and it is open source on{" "}
        <a
          href="https://github.com/camila-ferreira/react-weather-search-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://react-weather-search-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
