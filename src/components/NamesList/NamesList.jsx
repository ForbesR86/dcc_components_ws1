import React from "react";
import './NamesList.css'


const NamesList=(props)=>{
    
        return(
        <div className='header'>
            <h2> Names </h2>
            <hr/>
            <ul>
                {props.names.map((name)=>{
                    return <li className="a" key={name}> {name} </li>
                })}
            </ul>
        </div>
        );
    }


export default NamesList;