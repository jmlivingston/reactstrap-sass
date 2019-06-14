import React, { useState } from 'react'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import Dropdown from '../Dropdown'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle tag="span" onClick={() => setIsOpen(!isOpen)} data-toggle="dropdown" aria-expanded={isOpen}>
        Custom Dropdown Content
      </DropdownToggle>
      <DropdownMenu>
        <div onClick={() => setIsOpen(!isOpen)}>Custom dropdown item</div>
        <div onClick={() => setIsOpen(!isOpen)}>Custom dropdown item</div>
        <div onClick={() => setIsOpen(!isOpen)}>Custom dropdown item</div>
        <div onClick={() => setIsOpen(!isOpen)}>Custom dropdown item</div>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Example
