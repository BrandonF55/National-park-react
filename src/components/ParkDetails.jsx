import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ParkDetails({ parkId }) {
    const [park, setPark] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data') //This needs to change
            .then(response => {
                setPark(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [parkId]);

    if (!park) {
        return <div className='noParkErrorDiv'> The End Is Neigh</div>

    }

    return (
        <div>

            <h2>{park.name}</h2>
            <p>{park.description}</p>
            <p>Location: {park.location}</p>
            <p> </p>
            <p></p>
            <p></p>

        </div>
    )

}

export default ParkDetails;