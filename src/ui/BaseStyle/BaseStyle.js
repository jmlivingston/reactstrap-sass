import PropTypes from 'prop-types'
import './BaseStyle.scss'

const BaseStyle = ({ children }) => ({ children })

BaseStyle.propTypes = {
  children: PropTypes.node
}

export default BaseStyle
