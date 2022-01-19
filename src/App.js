import './App.css';

import {useEffect, useState} from 'react'
import axios from 'axios'

import CountryList from './Components/CountryList'
import Country from './Components/Country'
import SearchCountry from './Components/SearchCountry'

require('dotenv').config()

function App() {

  const [countries, setCountries] = useState([])
  const [newSearch, setnewSearch] = useState('')
  const [tooMuchResults, settooMuchResults] = useState(false)

  const checkLimit = (countries) => {
    if (countries.length <= 10) {
      setCountries(countries)
      settooMuchResults(false)
    } else {
      setCountries([])
      settooMuchResults(true)
    }
  }

  useEffect(() => {
    if(newSearch) {
      axios
      .get(`https://restcountries.com/v2/name/${newSearch}`)
      .then(response => {
        console.log(response);
        const {data} = response
        const c = 
          data.filter(country => country.name.toLowerCase()
            .includes(newSearch.toLowerCase()))

        checkLimit(c)
      })
      .catch(error => {
        console.error(error);
      })
    } else {
      settooMuchResults(false) // Para evitar el mensaje residual
    }
  }, [newSearch])

  const handleChange = (e) => {
    setnewSearch(e.target.value)
  }
 
  return (
    <div className='card'>
      <h1>Countries database</h1>

      <SearchCountry onChange={handleChange} value={newSearch} />

      {tooMuchResults ? <h3>Too much results to show</h3> :
        countries.length === 1 ?
          <Country country={countries[0]}/> : <CountryList countries={countries} />
      }
    </div>
  );
}

export default App;
