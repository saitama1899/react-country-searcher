import {useEffect, useState} from 'react'
import axios from 'axios'

import CountryInfo from './CountryInfo'
import CountryWeather from './CountryWeather'
import LoadingSpinner from './LoadingSpinner'

const Country = ({country}) => {

  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API
  const [weather, setWeather] = useState({})

  useEffect(() => {
    if (country.capital){
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${WEATHER_API_KEY}&units=metric`)
      .then((response) => {
        const {data} = response
        setWeather(data)
      })
    }
  },[WEATHER_API_KEY, country.capital])
 
  return (
    <>
      <CountryInfo country={country} />
      {
        Object.entries(weather).length > 0 ? 
          <CountryWeather weather={weather} /> : 
          <LoadingSpinner/>
      }
    </>
  );
};

export default Country;