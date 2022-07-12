import React from 'react';
import '../styles/HeaderContainer.css'  
import imagen from "../imagenes/BLANCO.png"


export const HeaderComponent = () =>{

    return(
        <div className='headerContainer'>
            <div className='title'>MATRIZ UNIVERSITARIA | UTN FRC Y LOS ODS</div>
            <img className='logo' src={imagen} alt="no sale" />
            <select className='select' name="" id=""> selecion</select>
        </div>
    );
} 