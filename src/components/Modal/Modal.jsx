import PropTypes from 'prop-types'
import './Modal.css'

function Modal({ children, reset }) {
  const handleClick = () => {
    reset()
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={handleClick}>
          &times;
        </span>
        <p>{children}</p>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
  reset: PropTypes.func
}

export default Modal
