import React from 'react';
import "../styles/estiloModal.css" 

    
export const Desplegar = ({desplegar, cotraer,children}) =>{

    const contraerSoloSiEsAfuera = (e) =>{
        e.stopPropagation();
        
    }
    
    return(
        <div className={`modal ${desplegar && 'modal-open'}`} onClick={cotraer}>
           <div className='alerta' onClick={contraerSoloSiEsAfuera}>              
                {children}
           </div>
        </div>
    );
} 