import Buttons from "./Buttons";
import React from "react";
import '../styles/App.css'


function Menu(props){
    return (
        <>
        <ul className="list">
            {props.link.map
            (link => <li>{link}</li> )}
      </ul>
      <Buttons buttonOneText="Sair" buttonTwoText="Login" />

            </>
      
    )
}

export default Menu;