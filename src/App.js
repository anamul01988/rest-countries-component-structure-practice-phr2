import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Person from './components/Person/Person';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
        {/* <LoadCountries/>
        <Person/>
        <Header/> */}
        <Countries/>

    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
  },[]);
  return(
    <div>
      <h3>hellow world.</h3>
      <p>{countries.length}</p>
      {
        // countries.map(countries => console.log(countries))
        countries.slice(0,4).map(countries => <Country name = {countries.name.common} population={countries.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
        <h5>Name: { props.name}</h5>
        <h5>population: { props.population}</h5>
    </div>
  )
}

export default App;
