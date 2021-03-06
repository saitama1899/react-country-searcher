import {useEffect, useState} from 'react'
import axios from 'axios'

import CountryInfo from './CountryInfo'
import CountryWeather from './CountryWeather'
import LoadingSpinner from './LoadingSpinner'

const Country = ({country}) => {

  const WEATHER_STACK_API_KEY = process.env.REACT_APP_WEATHER_STACK
  const [weather, setWeather] = useState({})

  useEffect(() => {
    if (country.capital){
      axios
      .get(`http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API_KEY}&query=${country.capital}`)
      .then((response) => {
        const {data} = response
        setWeather(data)
      })
    }
  },[WEATHER_STACK_API_KEY, country.capital])
 
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