import React from 'react'
import { useState, useEffect } from 'react';
// import { ClipLoader } from 'react-spinners';

import { fetchData, weatherOptions } from '../utils/fetchData';

import styles from '../assets/SearchWeather.module.css';
import AutoComplete from './AutoComplete';

const SearchWeather = ({ searchData }) => {

  const [search, setSearch] = useState('');
  const [autoSearch, setAutoSearch] = useState('');
  const [suggestionsData, setSuggestionsData] = useState();
  const [locationNotFound, setLocationNotFound] = useState(false);

  const handleSearch = async () => {
        if(search){
          const currentWeather = await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`, weatherOptions);
          setSearch('');
          // setCurrentWeather(currentWeather);
          if(currentWeather.error){
            setLocationNotFound(true);
          }else{
            searchData(currentWeather); // SENDS DATA TO DASHBOARD BY typing and pressing ENTER
            setLocationNotFound(false);
          }
        }
    }
  
  useEffect(() => {
    if(search){
      const autoCompleteSearch = async () => {
        const suggestionsData = await fetchData(`https://weatherapi-com.p.rapidapi.com/search.json?q=${search}`, weatherOptions);
        setSuggestionsData(suggestionsData);
      }
      autoCompleteSearch();
    }
  }, [search])

  useEffect(() => {
    if (autoSearch) {
      const handleAutoSearch = async () => {
        const currentWeather = await fetchData(`https://weatherapi-com.p.rapidapi.com/current.json?q=${autoSearch}`, weatherOptions);
        setSearch('');
        searchData(currentWeather); // SENDS DATA TO DASHBOARD BY typing and clicking a result from DROPDOWN
        setLocationNotFound(false);
      }
      handleAutoSearch();
    }
      // eslint-disable-next-line
  }, [autoSearch])


  function handleAutoCompleteSearch(suggestionUrl){
    setAutoSearch(suggestionUrl);
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
            <div className={styles.AutoCompleteContainer}>
              {suggestionsData && search ? 
              suggestionsData.map(suggestion => (
                <AutoComplete 
                  suggestionName={suggestion.name} 
                  suggestionRegion={suggestion.region}
                  key={suggestion.id + suggestion.name + suggestion.region}
                  // onClick={() => setSearch(suggestion.name)}
                  onClick={() => handleAutoCompleteSearch(suggestion.url)}
                   />
              )) 
              : undefined}
              {
                locationNotFound === true && 
                <p>Ooops! Try again.</p>
              }
            </div>
        </form>
    </div>
  )
}

export default SearchWeather