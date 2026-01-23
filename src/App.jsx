import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherSearch from "./WeatherSearch.jsx";

function App() {
  return (
    <div className="app">
      <WeatherSearch />
    </div>
  );
}

export default App;
