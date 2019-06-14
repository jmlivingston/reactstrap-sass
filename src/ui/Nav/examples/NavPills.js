import React, { useState } from 'react'
import Dropdown from '../../Dropdown/Dropdown'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import NavItem from '../../NavItem/NavItem'
import NavLink from '../../NavLink/NavLink'
import Nav from '../Nav'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav pills>
      <NavItem>
        <NavLink href="/" active>
          Link
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <DropdownToggle nav caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="/">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="/">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Example
