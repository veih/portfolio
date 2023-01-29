import { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from 'react-icons/ti'

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
  weather: WeatherData[];
  main: Main;
}

const WeatherForecast: React.FC<{ city: string }> = () => {
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [city, setCity] = useState('Fortaleza');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73486a3890dd0f2540d436c19cb62e83`
      );
      const data = await response.json();
      setWeather(data);
    }
    fetchData();
  }, []);

  if (!weather.main) {
    return <div>{<TiWeatherPartlySunny id="nuvem"/>}</div>;
  }

  const { icon } = weather.weather[0];
  const { temp, temp_min, temp_max } = weather.main;

  return (
    <div id="temp">
      <h2>{city}</h2>

      <p>
        Temperatura: {temp}°C (Min: {temp_min}°C, Max: {temp_max}°C)
      </p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={"#"} />
    </div>
  );
};

export default WeatherForecast;
