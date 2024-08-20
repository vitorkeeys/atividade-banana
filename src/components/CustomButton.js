import React from "react";

function CustomButton({ buttonOneText, buttonTwoText, onButtonOneClick, onButtonTwoClick }){
    return (
        <>
        <button onClick={onButtonOneClick}>{buttonOneText}</button>
        <button onClick={onButtonTwoClick}>{buttonTwoText}</button>
        </>
        
    )
}

export default CustomButton;