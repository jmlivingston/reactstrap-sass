import React, { useState } from 'react'
import Button from '../../Button/Button'
import PopoverBody from '../../PopoverBody/PopoverBody'
import PopoverHeader from '../../PopoverHeader/PopoverHeader'
import Popover from '../Popover'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={isOpen} target="Popover1" toggle={() => setIsOpen(!isOpen)}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </PopoverBody>
      </Popover>
    </>
  )
}

export default Example
