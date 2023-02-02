import React from "react";
import '../Styles/selectScreen.css'
import { characters } from '../../Data/characters'
//import { SelectedFighters } from '../../Home/Components/SelectedFighters'
import { UseDataContext } from '../../Services/dataContext'
import { SelectedFighters } from "./SelectedFighters";
//agregar click a cada cuadrado de personaje, y en current click obtenemos nombre y gif, agregar con useContext quizas. estado para compartirselo a selected fighter.
 

function Home () {
    const context = UseDataContext()

   
    const over =(e)=>{
        let id = parseInt(e.target.id)

        context.selectFighter(id)
    }

    const clickSelected = (e)=>{
        let id = parseInt(e.target.id)

        context.fighterClick(id)
    }
   

    return(
        <>
    
            <div className="flex">
            <SelectedFighters/>
            
                <div className="container">
                    <img className="background" src="https://pp.userapi.com/c855416/v855416380/6ca17/azlBVyOxSw4.jpg" alt="select-your-fighter"></img>
                    
                    <div className="select-your-fighter" id="19"
                    onMouseOver={over}
                    onClick={clickSelected} >

                        {characters.map((index, character)=>(
                            <div className={`character ${index.name}`} id={character} key={character}></div>
                        ))}
                        
                    </div>
                </div>
            <div className="noobSaibotFix"></div>
            
            </div>
        
        </>
    )
}

export { Home };