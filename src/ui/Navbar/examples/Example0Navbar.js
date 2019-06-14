import React, { useState } from 'react'
import Collapse from '../../Collapse/Collapse'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import Nav from '../../Nav/Nav'
import NavbarBrand from '../../NavbarBrand/NavbarBrand'
import NavbarToggler from '../../NavbarToggler/NavbarToggler'
import NavItem from '../../NavItem/NavItem'
import NavLink from '../../NavLink/NavLink'
import UncontrolledDropdown from '../../UncontrolledDropdown/UncontrolledDropdown'
import Navbar from '../Navbar'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Example
