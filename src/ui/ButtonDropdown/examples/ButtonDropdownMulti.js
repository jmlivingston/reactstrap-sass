import React, { useState } from 'react'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import ButtonDropdown from '../ButtonDropdown'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ButtonDropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle color="primary" caret>
        Dropdown Toggle Text
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  )
}

export default Example
