import axios from "axios";

const useWeather = () => {
  return getTemperature;
};

function getTemperature(city) {
  const apiKey = "44b4d9f5e3a3baf490c33c5519ot4f0a";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  return axios.get(apiUrl);
}

export { useWeather };
