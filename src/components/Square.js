import React from 'react'

const Square = ({value, onClick}) => {
	return (
		<button className="game-button" onClick={onClick}>{value}</button>
	)
}

export default Square
