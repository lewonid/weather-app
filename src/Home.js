import './App.css';
import CurrentWeather from './components/CurrentWeather';
import { fetchData, weatherOptions } from './utils/fetchData';
import { useEffect, useState } from 'react';

function Home() {

  const [currentWeather, setCurrentWeather] = useState([])

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const currentWeather = await fetchData('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', weatherOptions);

      setCurrentWeather(currentWeather);
    }

    fetchCurrentWeather();
  }, []);

  // console.log(currentWeather);

  return (
    <div className="Home">
      <CurrentWeather currentWeather={currentWeather} />
    </div>
  );
}

export default Home;
