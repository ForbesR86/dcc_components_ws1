import React from "react";
import './SuperHeroTable.css'

const SuperHeroTable = (props)=>{

    return(
    <div className="table">
        <table>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Primary Ability </th>
            <th>Secondary Ability</th>
          </tr>
        
          {props.superheroes.map((superhero)=> {
              return(
               <tr className="details">
               <th> {superhero.name} </th>
               <th> {superhero.primaryAbility} </th>
               <th> {superhero.secondarAbility} </th>
               </tr> 
            )
            }
            )
            }
              
        </table>
    </div>
    )
}



export default SuperHeroTable;