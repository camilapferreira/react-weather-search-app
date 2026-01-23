import React from "react";

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
