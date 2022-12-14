import React from 'react';
import '../styles/HeaderContainer.css'  
import logoRI from "../imagenes/logoR.I.png"
import gifOds from "../imagenes/giftitularmatrizf-ods.gif"
import logofacu from "../imagenes/logoUTN.png"
import "../styles/checkcoplianceods.css" 

import inst from "../imagenes/iconosredes/insta.png"
import face from "../imagenes/iconosredes/face.png"
import ins from "../imagenes/iconosredes/in.png"
import twit from "../imagenes/iconosredes/twitter.png"
import home from "../imagenes/iconosredes/home.png"

import { Desplegar } from './Desplegar';
import { UseModal } from '../hocks/useModal';

export const HeaderComponent = () =>{
    const[openModalMatriz, desplegarMatriz, contraerMatriz] = UseModal();
    const[openModalInstitucional, desplegarInstitucional, contraerInstitucional] = UseModal();
    

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
                <img className='logoSecretaria' src={logoRI} alt="no sale" />
            </div>
            <div className='menu'>

            <Desplegar 
            desplegar={openModalMatriz} 
            cotraer={contraerMatriz}>
                 <div className='cabezeraDelDesplegable'>
                    <img className='cabezeraImagnenIzq' src={gifOds} alt="" />
                    <img className='cabezeraImagenesDer' src={logofacu} alt="" />
                    <img className='cabezeraImagenesDer' src={logoRI} alt="" />
                </div>
                    
                <div >
                    <div className='contenedorBotonCierre'>
                        <button onClick={contraerMatriz} className='botonCierre'>
                            <img className='home' cl src={home} alt="" />
                        </button> 
                    </div>
                </div>      

                 <div className='contenedorDatosProyecto'>

                    <div className='contenedorDatosProyectoIzq'>
                        <p>
                            <h4 className='titulo tiludoHead'>Misi??n</h4>

                            <p className='descripcion'>

                                A trav??s de la implementaci??n de estrategias de vinculaci??n, la Secretar??a de Relaciones
                                Institucionales busca promover gestiones que propicien acrecentar e intensificar las relaciones e
                                interacci??n de la Universidad con la sociedad; trabajar para la articulaci??n de los sujetos, agencias
                                y recursos con la Instituci??n; incentivar la vinculaci??n con los distintos sectores generando
                                procesos de integraci??n que permitan el crecimiento sustentable. En este sentido mediante la
                                Matriz Universitaria ODS / UTN - FRC se apunta a vincular actividades y proyectos de esta Casa de
                                Estudios con los Objetivos de Desarrollo Sostenible; motivando as?? ideas para la acci??n, generando
                                oportunidades de desarrollo e incentivando el compromiso por el cumplimiento de las metas y
                                acciones que integran la Agenda 2030.
                            </p>

                        </p>
                            
                    </div>

                </div>      

            </Desplegar>
            
            <Desplegar 
            desplegar={openModalInstitucional} 
            cotraer={contraerInstitucional}>
                    
                <div className='cabezeraDelDesplegable'>
                    <img className='cabezeraImagnenIzq' src={gifOds} alt="" />
                    <img className='cabezeraImagenesDer' src={logofacu} alt="" />
                    <img className='cabezeraImagenesDer' src={logoRI} alt="" />
                </div>

                <div >
                    <div className='contenedorBotonCierre'>
                        <button onClick={contraerInstitucional} className='botonCierre'>
                            <img className='home' cl src={home} alt="" />
                        </button> 
                    </div>
                </div>      

                 <div className='contenedorDatosProyecto'>

                    <div className='contenedorDatosProyectoIzq'>
                        <p>
                            <h4 className='titulo tiludoHead'>OBJETIVOS DE LA MATRIZ INTERACTIVA</h4>

                            <p className='descripcion'>
                                Vincular actividades y proyectos universitarios con el/los ODS de mayor impacto, proporcionando ideas para la acci??n, generando oportunidades de desarrollo e
                                incentivando el compromiso por el cumplimiento de cada uno de los 17 Objetivos de Desarrollo Sostenible.
                            </p>

                        </p>
                            
                    </div>

                </div>
            </Desplegar>




                <button onClick={desplegarMatriz} className='linkMenu' >MATRIZ</button>
                <button onClick={desplegarInstitucional} className='linkMenu' >INSTITUCIONAL</button> 
            </div>
            <div className='buscador'></div>
            <img className='title' src={gifOds} alt="no sale" />
            <img className='logoFacu' src={logofacu} alt="no sale" />
        </div>
    );
} 