import React from 'react';

const Country = (props) => {
    console.log(props)
    const {area}= props.countries; //countries nam er property diye aikhane analam tar vitor theke area namer property k object destructure korlam
    return (
        <div>
        <h5>Name: { props.name}</h5>
        <h5>population: { props.population}</h5>
        <h5>area: { area}</h5>
    </div>
    );
}

export default Country;
