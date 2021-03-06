const CountryWeather = ({weather}) => {
  return (
    <div className='weather container'>

      <div className='column'>
        <h3>Current weather in {weather.location.name}</h3>
        <img src={weather.current.weather_icons[0]} 
          alt={weather.current.timezone_id} width='100' />
          <span>{weather.current.temperature}º Celsius</span><br/>
          <span>{weather.current.weather_descriptions[0]}</span><br/>
          <span>{weather.current.humidity}% humidity</span><br/>
          <span>{weather.current.wind_speed} mph wind speed</span><br/>
          <span>Direction {weather.current.wind_dir}</span>
      </div>

      <div className='column'>
        <h3>Local time</h3>
        <img src='https://blaugranas.es/clock.png' alt='clock' width='100' />
        <span>{weather.location.localtime}</span><br/>
        <span>Timezone: {weather.location.timezone_id}</span><br/>
        <span>Lat: {weather.location.lat}</span><br/>
        <span>Lon: {weather.location.lon}</span><br/>
        <span>City: {weather.location.name}</span><br/>
      </div>
      
    </div>  
  );
};

export default CountryWeather;