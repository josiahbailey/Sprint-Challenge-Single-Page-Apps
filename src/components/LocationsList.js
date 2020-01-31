import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from './LocationCard'
import styled from 'styled-components'

const LocationDiv = styled.div`
    text-align: center;
`

export default function LocationsList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
          .then(res => {
            console.log(res)
            setData(res.data.results)
            //setSearchData(res.data.results)
          })
          .catch(err => {
            console.log("ERROR", err)
          })
    
    }, []);
    return (  
        <section>
            <LocationDiv>
            {data.map(loca => (
                <LocationCard location={loca} />
            ))}
            </LocationDiv>
        </section>
    );
}
