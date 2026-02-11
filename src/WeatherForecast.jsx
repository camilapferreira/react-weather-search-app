import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherForecast({ weekdays, city }) {
  const { forecastData } = useWeatherForecast(city);

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }
  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="WeatherForecast row">
      {weekdays.map((day) => (
        <div className="col">
          <div className="WeatherForecastPreview">
            <div className="forecast-time">
              {formatDay(forecastData[day - 1].time)}
            </div>
            <img
              src={forecastData[day].condition.icon_url}
              alt="weather icon"
              className="forecast-icon"
              width={42}
              height={42}
            />
            <div className="forecast-temperature">
              <span className="forecast-temperature-max">
                {Math.round(forecastData[day].temperature.maximum)}°
              </span>
              <span className="forecast-temperature-min">
                {" "}
                {Math.round(forecastData[day].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const useWeatherForecast = (city) => {
  const [forecastData, setForecastData] = useState(null);

  function getForecast(city) {
    const key = "44b4d9f5e3a3baf490c33c5519ot4f0a";
    const query = { city };
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;
    axios.get(apiUrl).then(showData);
  }
  useEffect(() => {
    getForecast(city);
  }, [city]);

  function showData(response) {
    console.log(response);
    setForecastData(response.data.daily);
  }

  return { forecastData };
};
