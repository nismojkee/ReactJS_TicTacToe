import React, {useState} from 'react'
import { calcWinner } from '../helper'
import Board from './Board'

const App = () => {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xNext, setXNext] = useState(true)
	const winner = calcWinner(board)

	const handleClick = i => {
		const copyBoard = [...board]
		if(winner || copyBoard[i]) return;
		copyBoard[i] = xNext ? 'X' : 'O'
		setBoard(copyBoard)
		setXNext(!xNext)
	}

	const renderMoves = () => (
		<button className="newgame-button" onClick={() => setBoard(Array(9).fill(null))}>
			New Board
		</button>
	)

	return (
		<>
			<h1>Tic-Tac-Toe Game</h1>
			<>
				<Board squares={board} onClick={handleClick}/>
				<p>{winner ? 'Winner: ' + winner : 'Next player: ' + (xNext ? 'X': 'O')}</p>
				{renderMoves()}
			</>
		</>
	)
}

export default App
