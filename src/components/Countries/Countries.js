import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data =>setCountries(data))
    },[]);
    return (
        <div>
        <h3>hellow world.</h3>
        <p>{countries.length}</p>
        {
          // countries.map(countries => console.log(countries))
          countries.slice(0,4).map(countries => <Country countries={countries} name = {countries.name.common} population={countries.population}></Country>)
        }
      </div>
    );
};

export default Countries;