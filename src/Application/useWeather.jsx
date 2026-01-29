import { useState, useEffect } from "react";
import axios from "axios";
export const formatDate = (data = Date.now()) => {
  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayOfWeek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dayOfWeekName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${dayOfWeekName[dayOfWeek]} ${hours}:${minutes}`;
};

const useWeather = () => {
  const [city, setCity] = useState("Paris");
  const [WeatherData, setWeatherData] = useState({});
  const weekdays = Array.from({ length: 5 }, (_, index) => index + 1);

  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      getTemperature(city).then(showData);
    }
  }
  useEffect(() => {
    getTemperature(city).then(showData);
  }, []);

  function showData(response) {
    console.log(Date.now());
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
  function getTemperature(city) {
    const apiKey = "44b4d9f5e3a3baf490c33c5519ot4f0a";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    return axios.get(apiUrl);
  }
  return {
    city,
    WeatherData,
    weekdays,
    handleSubmit,
    handleChange,
    showData,
    formatDate,
  };
};

export { useWeather };
