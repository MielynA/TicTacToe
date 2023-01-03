import React, {useState} from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
const [turns, setTurns] = useState('x')
const [cells, setCells] = useState(Array(9).fill(''))

const handleClick = (num) => {
	let squares = [...cells]
    if (turns === 'x') {
		squares[num] = 'x'
        setTurns('o');
    } else {
		squares[num] = 'o'
        setTurns('x');
    }
	setCells(squares)
    console.log(squares)
}

 const Cell = ({box}) => {
    return  <td onClick={()=> handleClick(box)}>-</td>
 }



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