import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast({ weekdays, city }) {
  const [forecastData, setForecastData] = useState(null);

  function showData(response) {
    console.log(response);
    setForecastData(response.data);
  }

  const key = "44b4d9f5e3a3baf490c33c5519ot4f0a";
  const query = { city };
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${key}`;
  axios.get(apiUrl).then(showData);

  return (
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
  );
}
