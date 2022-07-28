import React from 'react';
import"../styles/NewLinkOds.css"
export const NewLinkOds = (props) =>{
    return(
        <div  className='odsContain'>

            <a href={`https://www.un.org/sustainabledevelopment/es/${props.keyWord}/`} target="_blank" rel="noreferrer">
        
                    <img className='imagenOds' src={`https://cooperanda.org/wp-content/uploads/2019/05/ods_${props.odsImagen}.png`} alt="" />        
            </a>

        </div>
    );
} 