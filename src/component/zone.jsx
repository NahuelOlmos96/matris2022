import React from 'react';
import "../styles/zone.css"    
export const Zone = (props) =>{
    return(
        <div className='containZone'>
            <img className='logoZona' src={props.logo} alt="no sale" />
        </div>
    );
} 