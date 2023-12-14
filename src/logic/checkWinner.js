import WINNER_COMBOS from './WINNER_COMBOS.JS'

const checkWinner = (boardToCheck) => {
  let returned = null
  WINNER_COMBOS.forEach((combo) => {
    const [a, b, c] = combo
    if (
      boardToCheck[a] !== null &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      returned = boardToCheck[a]
    }
  })

  return returned
}

export default checkWinner
