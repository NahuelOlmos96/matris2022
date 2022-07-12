import React from 'react';
import { NewLinkOds } from './NewLinkods';


import "../styles/LinkOdsConponent.css" 

const dateBaseOds =[
    {id:1 , keyword: "poverty" },
    {id:2 , keyword: "hunger" },
    {id:3 , keyword: "health" },
    {id:4 , keyword: "health" },
    {id:5 , keyword: "education" },
    {id:6 , keyword: "gender-equality" },
    {id:7 , keyword: "energy" },
    {id:8 , keyword: "economic-growth" },
    {id:9 , keyword: "infrastructure" },
    {id:10 , keyword: "inequality" },
    {id:11 , keyword: "cities" },
    {id:12 , keyword: "sustainable-consumption-production" },
    {id:13 , keyword: "climate-change-2" },
    {id:14 , keyword: "oceans" },
    {id:15 , keyword: "biodiversity" },
    {id:16 , keyword: "peace-justice" },
    {id:17 , keyword: "globalpartnerships" },

    
]   

export const LinkOdsCoponent = (props) =>{




  

    return(

        <div  className='matrisHeader'  >
            <div className='hContein'>
            <p>ÁREA</p>
            <p>PROYECTO</p>
            </div>
            
            <div className='listods'>

                {dateBaseOds.map((ods)=>(
                    <div key={ods.id}>
                        <NewLinkOds 
                        odsImagen = {ods.id} 
                        keyWord ={ods.keyword}
                        />
                        
                    </div>
                ))}
               
                 
                 
            </div>
                
        </div>
    );
} 