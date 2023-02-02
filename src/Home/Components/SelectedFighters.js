import React from "react";
import { UseDataContext } from '../../Services/dataContext'
import { characters } from '../../Data/characters'



function SelectedFighters(){
    const context = UseDataContext()
    let id = context.fighter
    let select = context.select

        if(!id) {
            return <img className="personaje" alt="personaje" src={characters[19].gif}></img>
        }
        else if(select !== null) {
            return <img className="personaje" alt="personaje" src={characters[id.id].click}></img>
        }
            return (
            <img className="personaje" alt="personaje" src={characters[id.id].gif}></img>
        )
        
}

export { SelectedFighters }