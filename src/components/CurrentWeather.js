import React from 'react'

const CurrentWeather = ({ currentWeather }) => {
    // console.log(currentWeather)

    return (
        <div className='CurrentWeather'>
            <p>{currentWeather != 0 ? currentWeather.location.name : 'Loading...'}</p>
            {currentWeather != 0 ? currentWeather.location.region : 'Loading...'}
        </div>
    )
}

export default CurrentWeather