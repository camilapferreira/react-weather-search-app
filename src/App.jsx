import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherSearch from "./WeatherSearch.jsx";

function App() {
  return (
    <div className="app container">
      <h1>Weather Search App</h1>
      <WeatherSearch />
      <footer>
        This project is developed by Camila Ferreira and it is open source on
        Netlify
      </footer>
    </div>
  );
}

export default App;
