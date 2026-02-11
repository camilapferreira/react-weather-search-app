import { useState, useEffect } from "react";
import axios from "axios";
export const formatDate = (date) => {
  if (!date) return ""; // Retorna vazio se a data ainda não existir

  const dayOfWeek = date.getDay();
  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`; // Opcional: formata 09:05 em vez de 9:5
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

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
  const [unit, setUnit] = useState("celsius");

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
    console.log(response);
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
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
