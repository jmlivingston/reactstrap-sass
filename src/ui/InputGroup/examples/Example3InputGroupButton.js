import React, { useState } from 'react'
import Button from '../../Button/Button'
import DropdownItem from '../../DropdownItem/DropdownItem'
import DropdownMenu from '../../DropdownMenu/DropdownMenu'
import DropdownToggle from '../../DropdownToggle/DropdownToggle'
import Input from '../../Input/Input'
import InputGroupAddon from '../../InputGroupAddon/InputGroupAddon'
import InputGroupButtonDropdown from '../../InputGroupButtonDropdown/InputGroupButtonDropdown'
import InputGroup from '../InputGroup'

const Example = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSplitButtonOpen, setIsSplitButtonOpen] = useState(false)
  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button>I'm a button</Button>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButtonDropdown
          addonType="append"
          isOpen={isDropdownOpen}
          toggle={() => setIsDropdownOpen(!isDropdownOpen)}>
          <DropdownToggle caret>Button Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButtonDropdown
          addonType="prepend"
          isOpen={isSplitButtonOpen}
          toggle={() => setIsSplitButtonOpen(!isSplitButtonOpen)}>
          <Button outline>Split Button</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">
          <Button color="secondary">I'm a button</Button>
        </InputGroupAddon>
      </InputGroup>
    </>
  )
}

export default Example
