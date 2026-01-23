import React, { useState } from "react";
import "./WeatherSearch.css";
import { useWeather } from "./Application/useWeather";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  fetch("http://127.0.0.1:7242/ingest/7b1cd414-8f89-4a7d-ac5c-377cf36aa67f", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      location: "WeatherSearch.jsx:8",
      message: "Calling useWeather",
      data: { useWeatherType: typeof useWeather },
      timestamp: Date.now(),
      sessionId: "debug-session",
      hypothesisId: "B",
    }),
  }).catch(() => {});
  // #endregion
  const hook = useWeather();

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    hook.getTemperature(city);
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
              <h1>{city}</h1>
              <ul>
                <li>
                  <span>Friday 13:18</span>, few clouds
                </li>
                <li>
                  Humidity: <strong>50%</strong>, Wind: <strong>10 km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <img
                  src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                  alt="weather icon"
                />
                <div className="temperature-value">
                  <strong>10</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="WeatherForecast row">
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Fri</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">14°</span>
                <span class="forecast-temperature-min">11°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Sat</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">15°</span>
                <span class="forecast-temperature-min">11°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Sun</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">14°</span>
                <span class="forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Mon</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">15°</span>
                <span class="forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Tue</div>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                alt="weather icon"
              />
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">15°</span>
                <span class="forecast-temperature-min">10°</span>
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
