export const saveBoardOnLocalStorage = (board) => {
  localStorage.setItem('board', JSON.stringify(board))
}
export const saveTurnOnLocalStorage = (turn) => {
  localStorage.setItem('turn', JSON.stringify(turn))
}

export const saveGameOnLocalStorage = ({ board, turn }) => {
  saveTurnOnLocalStorage(turn)
  saveBoardOnLocalStorage(board)
}

export const getBoardFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('board'))
}
export const getTurnFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('turn'))
}

export const resetGameOnLocalStorage = () => {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}
