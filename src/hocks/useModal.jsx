import { useState } from 'react';

export const UseModal = () =>{
    
    const[openModal,setOpenModal] = useState(false);

    const desplegar = () =>{
        setOpenModal(true)
        
    }
    const contraer = () =>{
        setOpenModal(false)
        
    }


    return[
        openModal, 
        desplegar, 
        contraer
    ]
} 