import {useEffect, useState} from 'react'
import axios from 'axios'
import clockImg from '../resources/clock.png';
const CountryWeather = ({weather}) => {

  const icon_url='https://openweathermap.org/img/wn/'
  // const TIMEZONE_API_KEY = process.env.REACT_APP_TIMEZONE_API
  const TIMEZONE_API_KEY = 'e17f232f27a34ea19f0599d6160e685d'
  const [timezone, settimezone] = useState({})

  useEffect(() => {
    if (weather.name){
      axios
      .get(`https://api.ipgeolocation.io/timezone?apiKey=${TIMEZONE_API_KEY}&location=${weather.name}`)
      .then((response) => {
        const {data} = response
        settimezone(data)
      })
    }
  },[TIMEZONE_API_KEY, weather.name])


  return (
    <div className='weather container'>

      <div className='column'>
        <h3>Current weather in {timezone.timezone}</h3>
        <img src={icon_url + weather.weather[0].icon+ '.png'} 
          alt={weather.weather[0].main} width='100' />
          <span>{weather.main.temp}º Celsius</span><br/>
          <span>{weather.weather[0].description}</span><br/>
          <span>{weather.main.humidity}% humidity</span><br/>
          <span>{weather.wind.speed} mph wind speed</span><br/>
          <span>Pressure {weather.main.pressure}</span>
      </div>

      <div className='column'>
        <h3>Local time</h3>
        <img src={clockImg} alt='clock' width='100' />
        <span>{timezone.time_24}</span><br/>
        <span>Clouds {weather.clouds.all}%</span><br/>
        <span>Lat: {weather.coord.lat}</span><br/>
        <span>Lon: {weather.coord.lon}</span><br/>
        <span>City: {timezone.timezone}</span><br/>
      </div>

    </div>  
  );
};

export default CountryWeather;