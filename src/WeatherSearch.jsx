import React, { useState } from "react";
import "./WeatherSearch.css";
import { useWeather } from "./Application/useWeather";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState(null);
  const [humidity, SetHumidity] = useState(null);
  const [wind, SetWind] = useState(null);
  const [icon, SetIcon] = useState(null);
  const hook = useWeather();

  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      hook(city).then(showData);
    }
  }

  function showData(response) {
    setTemperature(Math.round(response.data.temperature.current));
    setCondition(response.data.condition.description);
    SetHumidity(response.data.temperature.humidity);
    SetWind(response.data.wind.speed);
    SetIcon(response.data.condition.icon_url);
    console.log(response);
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
                  <span>Friday 13:18</span>, {condition}
                </li>
                <li>
                  Humidity: <strong>{humidity}%</strong>, Wind:{" "}
                  <strong>{wind} km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <img src={icon} alt="weather icon" />
                <div className="temperature-value">
                  <strong>{temperature}</strong>
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
