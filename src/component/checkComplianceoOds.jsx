import React from 'react';
import "../styles/checkcoplianceods.css" 
import { Desplegar } from './Desplegar';
import { UseModal } from '../hocks/useModal';
import { Zone } from './zone';

import ODS1 from '../imagenes/iconosodsx17/ODS1.png'
import ODS2 from '../imagenes/iconosodsx17/ODS2.png'
import ODS3 from '../imagenes/iconosodsx17/ODS3.png'
import ODS4 from '../imagenes/iconosodsx17/ODS4.png'
import ODS5 from '../imagenes/iconosodsx17/ODS5.png'
import ODS6 from '../imagenes/iconosodsx17/ODS6.png'
import ODS7 from '../imagenes/iconosodsx17/ODS7.png'
import ODS8 from '../imagenes/iconosodsx17/ODS8.png'
import ODS9 from '../imagenes/iconosodsx17/ODS9.png'
import ODS10 from '../imagenes/iconosodsx17/ODS10.png'
import ODS11 from '../imagenes/iconosodsx17/ODS11.png'
import ODS12 from '../imagenes/iconosodsx17/ODS12.png'
import ODS13 from '../imagenes/iconosodsx17/ODS13.png'
import ODS14 from '../imagenes/iconosodsx17/ODS14.png'
import ODS15 from '../imagenes/iconosodsx17/ODS15.png'
import ODS16 from '../imagenes/iconosodsx17/ODS16.png'
import ODS17 from '../imagenes/iconosodsx17/ODS17.png'
import logoRI from "../imagenes/logoR.I.png"
import gifOds from "../imagenes/giftitularmatrizf-ods.gif"
import logofacu from "../imagenes/logoUTN.png"
import home from "../imagenes/iconosredes/home.png"



 

export const CheckOds = (props) =>{

    const[openModal, desplegar, contraer] = UseModal();

   

    return(
        <div className='containCheck'>


            <button onClick={desplegar}  className='zonaProyectConteincheck'>
            
                    <div className='proyect'>{props.proyect}</div>
                    <div className='zone'> {<Zone 
                            logo ={props.logo} 
                            />}
                    </div>
                            
                    
            </button>
            
            <div className='listodscheck'>
                <div className={`' ods n1 ${props.ods1} '`}><img src={ODS1} alt="" /></div>
                <div className={`' ods n2 ${props.ods2} '`}><img src={ODS2} alt="" /></div>
                <div className={`' ods n3 ${props.ods3} '`}><img src={ODS3} alt="" /></div>
                <div className={`' ods n4 ${props.ods4} '`}><img src={ODS4} alt="" /></div>
                <div className={`' ods n5 ${props.ods5} '`}><img src={ODS5} alt="" /></div>
                <div className={`' ods n6 ${props.ods6} '`}><img src={ODS6} alt="" /></div>
                <div className={`' ods n7 ${props.ods7} '`}><img src={ODS7} alt="" /></div>
                <div className={`' ods n8 ${props.ods8} '`}><img src={ODS8} alt="" /></div>
                <div className={`' ods n9 ${props.ods9} '`}><img src={ODS9} alt="" /></div>
                <div className={`' ods n10 ${props.ods10} '`}><img src={ODS10} alt="" /></div>
                <div className={`' ods n11 ${props.ods11} '`}><img src={ODS11} alt="" /></div>
                <div className={`' ods n12 ${props.ods12} '`}><img src={ODS12} alt="" /></div>
                <div className={`' ods n13 ${props.ods13} '`}><img src={ODS13} alt="" /></div>
                <div className={`' ods n14 ${props.ods14} '`}><img src={ODS14} alt="" /></div>
                <div className={`' ods n15 ${props.ods15} '`}><img src={ODS15} alt="" /></div>
                <div className={`' ods n16 ${props.ods16} '`}><img src={ODS16} alt="" /></div>
                <div className={`' ods n17 ${props.ods17} '`}><img src={ODS17} alt="" /></div>
                
            </div>

            <Desplegar 
            desplegar={openModal} 
            cotraer={contraer}>
                    
                <div className='cabezeraDelDesplegable'>
                    <img className='cabezeraImagnenIzq' src={gifOds} alt="" />
                    <img className='cabezeraImagenesDer' src={logofacu} alt="" />
                    <img className='cabezeraImagenesDer' src={logoRI} alt="" />
                </div>

                <div className='contenedorBotonCierre'>
                    <button onClick={contraer} className='botonCierre'>
                        <img className='home' cl src={home} alt="" />
                    </button>        
                </div>        

                   {/*  datos  */}         
                <div className='contenedorDatosProyecto'>

                    <div className='contenedorDatosProyectoIzq'>

                        <div onClick={desplegar}  className='nombreProyecto'>
            
                        <div className='proyect proyectoDespleganble'>{props.proyect}</div>
                        <div className='zone zoneDesplegable'> {<Zone 
                                logo ={props.logo} 
                                />}
                        </div>
                                
                        
                        </div>
                        <h4 className='titulo'>objetivo</h4>
                        <p className='objetivos'>
                            {props.objetivo}
                        </p>
                        <h4 className='titulo '> descripción</h4>
                        <p className='descripcion'>
                            {props.descripcion}
                        </p>

                    </div>

                    <div className='contenedorDatosProyectoDer'>

                        <div className='contenedorDatosProyectoDerMarcoDesarollo'>
                            <h4 className='titulo marco'>marco de desarrollo del proyecto</h4>
                            
                            <div className={`' checkMarco ${props.investigaciones} '`}></div>
                            <h5 className='checkMarcoText'>Investigaciones de Departamento</h5>
                            <div className={`' checkMarco ${props.grupo} '`}></div>
                            <h5 className='checkMarcoText' >Grupo de Investigaciónes</h5>
                            <div className={`' checkMarco ${props.centro} '`} ></div>
                            <h5 className='checkMarcoText '>Centro de Investigación</h5>

                        </div>
                        <div className='contenedorDependencia'>
                            <h5 className=' titulo marco tituloDependencia '  >dependencia</h5>
                            <div className='dependencia' >
                              {props.dependencia}
                            </div>
                        </div>

                    </div>
                </div>

            </Desplegar>
        </div>
    );
} 