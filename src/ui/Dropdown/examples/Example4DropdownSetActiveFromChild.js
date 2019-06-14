import React from 'react'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import Nav from '../../Nav/Nav'
import Navbar from '../../Navbar/Navbar'
import NavItem from '../../NavItem/NavItem'
import NavLink from '../../NavLink/NavLink'
import UncontrolledDropdown from '../../UncontrolledDropdown/UncontrolledDropdown'

const Example = () => (
  <Navbar color="light" light expand="md">
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/components/">Inactive Link</NavLink>
      </NavItem>
      <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle tag="a" className="nav-link" caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag="a" href="/blah" active>
            Link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Navbar>
)

export default Example
