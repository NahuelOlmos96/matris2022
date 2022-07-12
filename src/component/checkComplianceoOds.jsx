import React from 'react';
import "../styles/checkcoplianceods.css" 
import { Zone } from './zone';


 

export const CheckOds = (props) =>{

    

    return(
        <div className='containCheck'>
            <div className='zonaProyectConteincheck'>

                    <div className='zone'> {<Zone 
                    zone ={props.zone}
                    logo ={props.logo} 
                    />}
                    </div>
                    
                    <div className='proyect'>{props.proyect}</div>
            </div>
            
            <div className='listodscheck'>

              

                <div className={`' ods n1 ${props.ods1} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n2 ${props.ods2} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n3 ${props.ods3} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n4 ${props.ods4} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n5 ${props.ods5} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n6 ${props.ods6} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n7 ${props.ods7} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n8 ${props.ods8} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n9 ${props.ods9} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n10 ${props.ods10} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n11 ${props.ods11} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n12 ${props.ods12} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n13 ${props.ods13} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n14 ${props.ods14} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n15 ${props.ods15} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n16 ${props.ods16} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                <div className={`' ods n17 ${props.ods17} '`}><img src="https://cdn.worldvectorlogo.com/logos/check-solid.svg" alt="" /></div>
                
            </div>
                
        </div>
    );
} 