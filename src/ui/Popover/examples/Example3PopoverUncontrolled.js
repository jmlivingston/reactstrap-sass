import React from 'react'
import Button from '../../Button/Button'
import PopoverBody from '../../PopoverBody/PopoverBody'
import PopoverHeader from '../../PopoverHeader/PopoverHeader'
import UncontrolledPopover from '../../UncontrolledPopover/UncontrolledPopover'

const Example = () => (
  <>
    <Button id="UncontrolledPopover" type="button">
      Launch Popover
    </Button>
    <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
      <PopoverHeader>Popover Title</PopoverHeader>
      <PopoverBody>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum.
      </PopoverBody>
    </UncontrolledPopover>
  </>
)

export default Example
