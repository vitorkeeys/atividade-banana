import React from "react";
import CustomButton from "./CustomButton";

function Buttons({ buttonOneText, buttonTwoText, onButtonOneClick, onButtonTwoClick }) {
    return (
        <div>
            <CustomButton buttonOneText="Sair" buttonTwoText="Login" />
        </div>
    );
}

export default Buttons;
