import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  return (
    <div className="container">
      <div className="weather-search">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter city name"
                className="form-control search-input"
              />
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
              <h1>New York</h1>
              <ul>
                <li>
                  <span>Friday 13:18</span>, few clouds
                </li>
                <li>
                  Humidity: <strong>50%</strong>, Wind: <strong>10 km/h</strong>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="temperature-container d-flex justify-content-end">
                <canvas width="52" height="52"></canvas>
                <div>
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
              <canvas width="38" height="38"></canvas>
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">14°</span>
                <span class="forecast-temperature-min">11°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Sat</div>
              <canvas width="38" height="38"></canvas>
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">15°</span>
                <span class="forecast-temperature-min">11°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Sun</div>
              <canvas width="38" height="38"></canvas>
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">14°</span>
                <span class="forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Mon</div>
              <canvas width="38" height="38"></canvas>
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">15°</span>
                <span class="forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="WeatherForecastPreview">
              <div class="forecast-time">Tue</div>
              <canvas width="38" height="38"></canvas>
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
