import React, { useState } from "react";
import axios from 'axios';


function NewParkForm() {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [stateName, setStateName] = useState('');
  const [rating, setRating] = useState('');

    const handleChange = (event) => {
        event.preventDefault();

        
        return
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
    }

    <form action="submit" onSubmit={handleSubmit}>
        <label>Park Name</label>
        <input type="text" name="parkName" id="parkName" onChange={()=> handleChange()}/>
        <label>Region</label>
        <input type="text" name="parkRegion" id="parkRegion" />
        <label>State</label>
        <input type="text" name="parkState" id="parkState" />
        <label>Rating</label>
        <input type="number" name="parkRating" id="parkRating" min='0' max='5' />
        <button type="submit">Submit that bitch</button>
    </form>

    //region -> state name -> rating

}

export default NewParkForm;