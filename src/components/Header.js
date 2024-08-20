import React from 'react';
import Menu from './Menu';
import Title from './Title';
import Buttons from './Buttons';
import NavBar from './Navbar';


function Header(props){

    return(
        <header className="main">
          
        <Title text="Banana's" />
        <NavBar link={props.link}/>
        

    
    
      </header>
    )
}


export default Header;

