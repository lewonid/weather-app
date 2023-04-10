import CurrentWeather from '../components/CurrentWeather';
import { fetchData, weatherOptions } from '../utils/fetchData';
import { useEffect, useState } from 'react';

import styles from '../assets/Dashboard.module.css';

import SearchWeather from '../components/SearchWeather';
import TodayOverview from '../components/TodayOverview';
import ForecastWeather from '../components/ForecastWeather';

function Dashboard() {

  // const [currentWeather, setCurrentWeather] = useState([])

  // useEffect(() => {
  //   const fetchCurrentWeather = async () => {
  //     const currentWeather = await fetchData('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', weatherOptions);

  //     setCurrentWeather(currentWeather);
  //   }

  //   fetchCurrentWeather();
  // }, []);

  // console.log(currentWeather);

  return (
    <div className={styles.Dashboard}>
      <div className="Overview" style={{ maxWidth: '820px', marginTop: '1.75rem', marginRight: '3rem'}}>
        <SearchWeather />
        <TodayOverview />
        <ForecastWeather />
      </div>
      <CurrentWeather />
      {/* <CurrentWeather currentWeather={currentWeather} /> */}
    </div>
  );
}

export default Dashboard;
