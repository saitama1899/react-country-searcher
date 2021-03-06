import {useState} from 'react'
import Country from './Country'



const CountryList = ({countries}) => {

  const [showMore, setshowMore] = useState({})

  
  const handleClick = (numericCode) => () => {
    countries.filter((country) => {
      if (country.numericCode === numericCode)  {
        setshowMore(country)
      }
      return null
    })
  }

  return (
    <>
    { Object.entries(showMore).length > 0 ? <Country country={showMore} /> : 
      <ul className='countryList'>
        {countries
          .map(country => (
            <li key={country.numericCode}>
              {country.name}
              <button onClick={handleClick(country.numericCode)}>Show</button>
            </li>
        ))}
      </ul> 
    }
    </>
  ); 
};

export default CountryList;
