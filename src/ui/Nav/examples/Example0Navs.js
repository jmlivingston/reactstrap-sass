import React from 'react'
import NavItem from '../../NavItem/NavItem'
import NavLink from '../../NavLink/NavLink'
import Nav from '../Nav'

const Example = () => (
  <>
    <p>List Based</p>
    <Nav>
      <NavItem>
        <NavLink href="/">Link</NavLink>
      </NavItem>
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
    <hr />
    <p>Link Based</p>
    <Nav>
      <NavLink href="/">Link</NavLink> <NavLink href="/">Link</NavLink> <NavLink href="/">Another Link</NavLink>{' '}
      <NavLink disabled href="/">
        Disabled Link
      </NavLink>
    </Nav>
  </>
)

export default Example
