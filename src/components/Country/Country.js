import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props)
    console.log(props.countries)
    const {area, name, region,flags}= props.countries; //countries nam er property diye aikhane analam tar vitor theke area namer property k object destructure korlam
    return (
        <div className='country'>
        <h5>Name: { props.name}</h5>
        <img src={flags.png}></img>
        <h5>population: { props.population}</h5>
        <h5>area: { area}</h5>
        <h5>name after common: {name.common}</h5>
        <h5>Region: {region}</h5>
    </div>
    );
}

export default Country;
