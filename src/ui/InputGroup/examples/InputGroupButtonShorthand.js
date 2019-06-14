import React from 'react'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import InputGroupAddon from '../../InputGroupAddon/InputGroupAddon'
import InputGroup from '../InputGroup'

const Example = () => (
  <>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <Button>To the Left!</Button>
      </InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append">
        <Button color="secondary">To the Right!</Button>
      </InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <Button color="danger">To the Left!</Button>
      </InputGroupAddon>
      <Input placeholder="and..." />
      <InputGroupAddon addonType="append">
        <Button color="success">To the Right!</Button>
      </InputGroupAddon>
    </InputGroup>
  </>
)

export default Example
