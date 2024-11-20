import React from 'react'
import './index.css';

function Adress(props) {
    const { region, zip } = props.adress || {};
    console.log(props.adress);
    return (
        <div>
            <ul>
                <h3>{region || "Region not available"}</h3>
                <h3>{zip || "Zip not available"}</h3>
            </ul>
        </div>
    );
}


export default Adress