import React from 'react'
import { useState } from 'react';

import { fetchData, weatherOptions } from '../utils/fetchData';

import styles from '../assets/SearchWeather.module.css';

const SearchWeather = ({ searchData }) => {

  const [search, setSearch] = useState('');
  // const [currentWeather, setCurrentWeather] = useState([])

  // console.log(search);
  // console.log(currentWeather);

  const handleSearch = async () => {
        if(search){
          const currentWeather = await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`, weatherOptions);
          setSearch('');
          // setCurrentWeather(currentWeather);
          searchData(currentWeather);
        }
      }

  const shortDate = new Date().toLocaleDateString(undefined, {month:'long', year:'numeric'});
  const longDate = new Date().toLocaleDateString(undefined, {weekday: 'long', day:'2-digit', month:'long', year:'numeric'});

  return (
    <div className={styles.SearchWeather}>
        <div className={styles.Date}>
            <h1>{shortDate}</h1>
            <p>{longDate}</p>
        </div>
        <form className={styles.form}>
            <input
             type='text'
             value={search}
             placeholder='&#x1F50E;&#xFE0E; Search location'
             onChange={e => setSearch(e.target.value)}
             onKeyDown={e => {
                if(e.key === 'Enter'){
                  e.preventDefault();
                  handleSearch();
                  }
                }
              }
            />
        </form>
    </div>
  )
}

export default SearchWeather