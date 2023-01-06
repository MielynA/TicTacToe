import React, {useState} from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
const [turns, setTurns] = useState('x')
const [cells, setCells] = useState(Array(9).fill(''))

const winningCombination = (squares) => {
   let combos = { 
    across: [[0,1,2],[3,4,5],[6,7,8]],
	diagonal: [[0,4,8],[2,4,6]],
	down: [[0,3,6],[1,4,7], [2,5,8]],

   }
}

const handleClick = (box) => {
	let squares = [...cells]
    if (turns === 'x') {
		squares[box] = 'x'
        setTurns('o');
    } else {
		squares[box] = 'o'
        setTurns('x');
    }
	setCells(squares)
    console.log(squares)
}

 const Cell = ({box}) => {
    return  <td onClick={()=> handleClick(box)}>{cells[box]}</td>


  return (
    <div className="container">
      <table>
				Turn: {turns}
				<tbody>
					<tr>
						<Cell box={0} />
						<Cell box={1} />
						<Cell box={2} />
					</tr>
					<tr>
						<Cell box={3} />
						<Cell box={4} />
						<Cell box={5} />
					</tr>
					<tr>
						<Cell box={6} />
						<Cell box={7} />
						<Cell box={8} />
					</tr>
				</tbody>
			</table>
    </div>
  )
}

export default TicTacToe