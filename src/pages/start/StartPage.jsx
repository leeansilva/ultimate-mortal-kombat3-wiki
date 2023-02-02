import React from "react";
import { NavLink } from "react-router-dom";
import './StartPage.css'

export const StartPage = () =>{
   

    return(
      
            <div className="flex">
                <div className="background1">
                    <img alt="" className="logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/c07be9421fc64b8e8ca2ebc12fcbd59d.png"/>              
                </div>

                <ul className="menu">
                    <li><NavLink to='/home' className={'li'} style={ ({isActive}) =>({ textDecoration: isActive ? 'none' : 'none', })}>START GAME</NavLink></li>
                    <li><NavLink className={'li'} style={ ({isActive}) =>({ textDecoration: isActive ? 'none' : 'none', })}>INFO</NavLink></li>
                    <li><NavLink className={'li'} style={ ({isActive}) =>({ textDecoration: isActive ? 'none' : 'none', })}>CONTACT ME</NavLink></li>
                    <li><NavLink className={'li'} style={ ({isActive}) =>({ textDecoration: isActive ? 'none' : 'none', })}>SECRETS</NavLink></li>
                </ul>
            </div>

           

    )
}