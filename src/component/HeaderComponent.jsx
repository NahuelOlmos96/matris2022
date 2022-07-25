import React from 'react';
import '../styles/HeaderContainer.css'  
import imagen from "../imagenes/logoR.I.png"
import gifOds from "../imagenes/giftitularmatrizf-ods.gif"
import logofacu from "../imagenes/logoUTN.png"

import inst from "../imagenes/iconosredes/insta.png"
import face from "../imagenes/iconosredes/face.png"
import ins from "../imagenes/iconosredes/in.png"
import twit from "../imagenes/iconosredes/twitter.png"
import home from "../imagenes/iconosredes/home.png"

export const HeaderComponent = () =>{

    return(
        <div className='headerContainer'>
            <div className='redesIncioContain'>
                <div className='redes'>
                <a href={`https://www.instagram.com/institucionalesutnfrc/`} target="_blank" rel="noreferrer"><img className='iconoRed' src={inst} alt="" /></a>
                <a href={`https://www.facebook.com/institucionalesutnfrc`} target="_blank" rel="noreferrer"><img className='iconoRed' src={face} alt="" /></a>
                <a href={`https://www.linkedin.com/company/institucionalesutnfrc/`} target="_blank" rel="noreferrer"><img className='iconoRed' src={ins} alt="" /></a>
                <a href={`https://twitter.com/rrii_utnfrc`} target="_blank" rel="noreferrer"><img className='iconoRed' src={twit} alt="" /></a>                    
                </div>
                <a href={`https://www.frc.utn.edu.ar/secretarias/relacionesinstitucionales/`} target="_blank" rel="noreferrer"><img className='incio' src={home} alt="" /></a>
                <img className='logoSecretaria' src={imagen} alt="no sale" />
            </div>
            <div className='menu'>
                <a className='linkMenu' href={`https://www.frc.utn.edu.ar/secretarias/relacionesinstitucionales/`}>MATRIZ</a>
                <a className='linkMenu' href={`https://www.frc.utn.edu.ar/secretarias/relacionesinstitucionales/`}>PROYECTO</a>
                <a className='linkMenu' href={`https://www.frc.utn.edu.ar/secretarias/relacionesinstitucionales/`} target="_blank"        rel='noreferrer'>INSTITUCIONAL</a> 
            </div>
            <div className='buscador'></div>
            <img className='title' src={gifOds} alt="no sale" />
            <img className='logoFacu' src={logofacu} alt="no sale" />
        </div>
    );
} 