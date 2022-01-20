import axios from 'axios'

export const GetCountries = (newSearch) => {
  return axios
  .get(`https://restcountries.com/v2/name/${newSearch}`)
  .then(response => {
    const {data} = response
    const c = 
      data.filter(country => country.name.toLowerCase()
        .includes(newSearch.toLowerCase()))

    return c
  })
}

