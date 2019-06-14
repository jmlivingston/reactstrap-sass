import React, { useState } from 'react'
import Collapse from '../../Collapse/Collapse'
import Nav from '../../Nav/Nav'
import Navbar from '../../Navbar/Navbar'
import NavbarBrand from '../../NavbarBrand/NavbarBrand'
import NavbarToggler from '../../NavbarToggler/NavbarToggler'
import NavItem from '../../NavItem/NavItem'
import NavLink from '../../NavLink/NavLink'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto">
        reactstrap
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="mr-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Example
