import React from 'react';

const Square = ({ color = 'white', text = 'Default Text' }) => (
    <div className={`square ${color}`}>{text}</div>
)


export default Square;