import React from 'react';
import "../styles/zone.css"    
export const Zone = (props) =>{
    return(
        <div className='containZone'>
            <img src={props.logo} alt="no sale" />
            <div>{props.zone}</div>
        </div>
    );
} 