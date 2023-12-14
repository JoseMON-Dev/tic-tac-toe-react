import './App.css'
import Turns from './components/Turns/Turns'
import Square from './components/Square/Square'
import { useState } from 'react'
import checkWinner from './logic/checkWinner'
import Modal from './components/Modal/Modal'
import {
  getBoardFromLocalStorage,
  getTurnFromLocalStorage,
  resetGameOnLocalStorage,
  saveGameOnLocalStorage
} from '../src/logic/storage.js'

function App() {
  const [board, setBoard] = useState(() => {
    if (localStorage.getItem('board') === null) {
      return Array(9).fill(null)
    } else {
      return getBoardFromLocalStorage()
    }
  })
  const [turn, setTurn] = useState(() => {
    if (localStorage.getItem('turn') === null) {
      return 'X'
    } else {
      return getTurnFromLocalStorage()
    }
  })
  const [winner, setWinner] = useState(null)

  const handlerBoard = (index) => {
    if (board[index] !== null) {
      return
    }
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turnsHandler()
    saveGameOnLocalStorage(newBoard, newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  const turnsHandler = () => {
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)
    return newTurn
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn('X')
    resetGameOnLocalStorage()
  }

  return (
    <>
      <section className='game'>
        {winner !== null && (
          <Modal reset={resetGame}>The winner is: {winner}</Modal>
        )}
        <header>
          <h1>Tic-Tac-Toe</h1>
          <button onClick={resetGame}>clear</button>
        </header>
        <section className='board'>
          {board.map((element, index) => (
            <Square key={index} index={index} updateBoard={handlerBoard}>
              {element}
            </Square>
          ))}
        </section>
        <Turns turn={turn}></Turns>
      </section>
    </>
  )
}

export default App
