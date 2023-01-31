import { useState, useEffect } from "react";

import "./weather.css";

interface WeatherData {
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
}

interface Weather {
  sys: any;
  coord: { lat: any; lon: any };
  name: { name: string };
  weather: WeatherData[];
  main: Main;
}

const api = {
  key: "73486a3890dd0f2540d436c19cb62e83",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
};

const WeatherForecast: React.FC<{ city: string }> = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<Weather>({} as Weather);

  const search = (event: { key: string }) => {
    if (event.key === "Enter") {
      fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=${api.lang}`
      )
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          
        });
    }
  };
  
  const dateBuilder = (d: Date) => {
    let months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    let days = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "weather "
            : "weather"
          : "weather"
      }
    >
      <main className="weather">
        <div>
          <input
            type="text"
            className="btn btn-default"
            placeholder="Sua cidade press enter"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="">
              <div className="weather__loc">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="weather__date">{dateBuilder(new Date())}</div>
            </div>
            <div >
              <div>{Math.round(weather.main.temp)}°C</div>
              <div>{weather.weather[0].icon}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default WeatherForecast;
