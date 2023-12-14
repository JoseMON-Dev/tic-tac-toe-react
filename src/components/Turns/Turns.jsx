import PropTypes from 'prop-types'
import './Turns.css'

function Turns({ turn }) {
  return (
    <section className='turns'>
      <p className={`turn  ${turn === 'X' ? 'active' : ''}`}>x</p>
      <p className={`turn  ${turn === 'O' ? 'active' : ''}`}>O</p>
    </section>
  )
}

Turns.propTypes = {
  turn: PropTypes.string
}

export default Turns
