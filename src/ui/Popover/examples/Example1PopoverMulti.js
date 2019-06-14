import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Button from '../../Button/Button'
import PopoverBody from '../../PopoverBody/PopoverBody'
import PopoverHeader from '../../PopoverHeader/PopoverHeader'
import Popover from '../Popover'

const PopoverItem = ({ id, item }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <span>
      <Button className="mr-1" color="secondary" id={'Popover-' + id} type="button">
        {item.text}}
      </Button>
      <Popover placement="top" isOpen={isOpen} target={'Popover-' + id} toggle={() => setIsOpen(!isOpen)}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </PopoverBody>
      </Popover>
    </span>
  )
}

PopoverItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object
}

const Example = () => {
  const popovers = [
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
  return popovers.map((popover, index) => <PopoverItem key={index} item={popover} id={index} />)
}

export default Example
