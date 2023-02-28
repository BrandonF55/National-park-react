import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParkDetails from './ParkDetails';

function ParkList() {
    const [park, setPark] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/api/data')  //We can change this to whatever Localhost our C# application is running on.
            .then(response => {
                setPark(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div className='parkList'>
            <h1>National & State Parks</h1>

            <li key={park.id}>
                <h2>{park.name}</h2>
                <p>{park.location}</p>
                <button>View Details</button>
                <ParkDetails parkId={park.id} />
            </li>

        </div>
    )
}

export default ParkList;