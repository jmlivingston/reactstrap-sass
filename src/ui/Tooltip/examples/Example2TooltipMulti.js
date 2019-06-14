import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Button from '../../Button/Button'
import Tooltip from '../Tooltip'

const TooltipItem = ({ id, item }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <span>
      <Button className="mr-1" color="secondary" id={'Tooltip-' + id}>
        {item.text}
      </Button>
      <Tooltip placement={item.placement} isOpen={isOpen} target={'Tooltip-' + id} toggle={() => setIsOpen(!isOpen)}>
        Tooltip Content!
      </Tooltip>
    </span>
  )
}

TooltipItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object
}

const Example = () => {
  const tooltips = [
    {
      placement: 'top',
      text: 'Top'
    },
    {
      placement: 'bottom',
      text: 'Bottom'
    },
    {
      placement: 'left',
      text: 'Left'
    },
    {
      placement: 'right',
      text: 'Right'
    }
  ]
  return tooltips.map((popover, index) => <TooltipItem key={index} item={popover} id={index} />)
}

export default Example
