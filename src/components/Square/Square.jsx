import PropTypes from 'prop-types'
import './Square.css'

function Square({ children, updateBoard, index }) {
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <span className='point' onClick={handleClick}>
      {children}
    </span>
  )
}

Square.propTypes = {
  children: PropTypes.string,
  updateBoard: PropTypes.func,
  index: PropTypes.number
}

export default Square
