import React from 'react'
import './Square.style.css'

const Square = ({value, onClick, isWiningSquare }) => {
    return (
    <button type="button" className = "square" 
    onClick = {onClick}
    style = {{fontWeight: isWiningSquare?'bold':'normal'}}>{value}</button>
    )
}

export default Square
