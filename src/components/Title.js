import React from 'react';
import './CustomButton';

function Title({ text, level }) {
    const Tag = `h${level}`; // Define o nível do título dinamicamente, como h1, h2, etc.

    return (
        <h1>{text}</h1>
    );
}

export default Title;
