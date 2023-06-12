import { React, useEffect } from 'react'
import data from "./filters.json"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

function Radios(props) {
 
    return (

        <FormGroup class="black-opacity">
            <h2>CC</h2>

            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <FormGroup
             
                value={props.vals}
                onChange={(event) => props.onChange(event)}
            >
                <ul class="list-unstyled">
                    {data.map((item) => (

                        <li><FormControlLabel value={item.id} control={<Checkbox   />} label={item.id} /></li>


                    ))}
                </ul>
            </FormGroup>
        </FormGroup>
    )
}

export default Radios
