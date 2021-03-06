const CountryInfo = ({country}) => {
  return (
    <div className='country container'>

      <div className='column'>
        <h2>{country.name}</h2>
        <img src={country.flag} alt={country.alpha2Code} width='250' />
      </div>

      <div className='column bleft'>
        <p><b>Capital:</b> {country.capital}</p>
        <p><b>Population:</b> {country.population}</p>
        <p><b>Languages</b></p>
        <ul className='languages'>
        {country.languages.map(lang => (
              <li key={lang.iso639_1} >{lang.name}</li> 
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CountryInfo;