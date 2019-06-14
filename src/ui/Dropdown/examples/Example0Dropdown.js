import React, { useState } from 'react'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import Dropdown from '../Dropdown'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle caret>Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Example
