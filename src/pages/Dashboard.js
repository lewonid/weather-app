import CurrentWeather from '../components/CurrentWeather';
import { fetchData, weatherOptions } from '../utils/fetchData';
import { useEffect, useState } from 'react';

import styles from '../assets/Dashboard.module.css';

import SearchWeather from '../components/SearchWeather';
import TodayOverview from '../components/TodayOverview';
import ForecastWeather from '../components/ForecastWeather';

function Dashboard() {

  const [currentWeatherData, setCurrentWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const defaultWeather = async () => {
      const currentWeather = await fetchData('https://weatherapi-com.p.rapidapi.com/current.json?q=Lugoj', weatherOptions);
      setCurrentWeatherData(currentWeather);
      setIsLoading(false);
    }
    defaultWeather();
  }, [])
  // DEFAULT WEATHER FETCHING DATA FOR


  // handleing data from SearchWeather component.
  const handleData = (weatherData) => {
    setCurrentWeatherData(weatherData)
  }

  // console.log(currentWeatherData);

  return (
    <div className={styles.Dashboard}>
      <div className={styles.Overview}>
        <SearchWeather searchData={handleData}/>
        <TodayOverview currentWeatherData={currentWeatherData} isLoading={isLoading}/>
        <ForecastWeather currentWeatherData={currentWeatherData} isLoading={isLoading}/>
      </div>
      <CurrentWeather currentWeatherData={currentWeatherData} isLoading={isLoading}/>
    </div>
  );
}

export default Dashboard;
