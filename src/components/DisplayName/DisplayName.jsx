import React from "react";
import './DisplayName.css'


const DisplayName = (props) => {
    return(
        <div className='displayName'>
            <div>
                <h1> {props.person.firstName} </h1>
                <h1> {props.person.lastName} </h1>
            </div>
        </div>
    )
}

export default DisplayName;