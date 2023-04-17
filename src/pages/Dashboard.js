import CurrentWeather from '../components/CurrentWeather';
import { fetchData, weatherOptions } from '../utils/fetchData';
import { useEffect, useState } from 'react';

import styles from '../assets/Dashboard.module.css';

import { getIP } from '../utils/fetchIP';

import SearchWeather from '../components/SearchWeather';
import TodayOverview from '../components/TodayOverview';
import ForecastWeather from '../components/ForecastWeather';

function Dashboard() {

  const [currentWeatherData, setCurrentWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ip, setIp] = useState('');

  useEffect(() => {
    const fetchIP = async () =>{
      const ip = await getIP();
      setIp(ip);
    }
    fetchIP();
  }, []) // getting ip adress
  
  // console.log(ip.ip);

  useEffect(() => {
    const defaultWeather = async () => {
      if(ip){
        const currentWeather = await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${ip.ip}`, weatherOptions);
        setCurrentWeatherData(currentWeather);
        setIsLoading(false);
      }
    }
    defaultWeather();
  }, [ip])
  // DEFAULT WEATHER FETCHING DATA AFTER IP LOCATION


  // handleing *getting data from SearchWeather component.
  const handleData = (weatherData) => { 
      setCurrentWeatherData(weatherData);
  }
  // getting forecastData from ForecastWeather
  const getForecast = (forecastData) =>{
    setForecastData(forecastData);
  } 

  return (
    <div className={styles.Dashboard}>
      <div className={styles.Overview}>
        <SearchWeather searchData={handleData}/>
        <TodayOverview currentWeatherData={currentWeatherData} isLoading={isLoading}/>
        <ForecastWeather currentWeatherData={currentWeatherData} isLoading={isLoading} getData={getForecast}/>
      </div>
      <CurrentWeather currentWeatherData={currentWeatherData} isLoading={isLoading} forecastData={forecastData}/>
    </div>
  );
}

export default Dashboard;
