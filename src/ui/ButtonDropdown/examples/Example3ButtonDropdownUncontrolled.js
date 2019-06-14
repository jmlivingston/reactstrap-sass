import React from 'react'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import UncontrolledButtonDropdown from '../../UncontrolledButtonDropdown/UncontrolledButtonDropdown'

const Example = () => (
  <UncontrolledButtonDropdown>
    <DropdownToggle caret>Dropdown</DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </UncontrolledButtonDropdown>
)

export default Example
