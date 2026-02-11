import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherSearch from "./WeatherSearch.jsx";

function App() {
  return (
    <div className="app">
      <WeatherSearch city="Paris" />
    </div>
  );
}

export default App;
