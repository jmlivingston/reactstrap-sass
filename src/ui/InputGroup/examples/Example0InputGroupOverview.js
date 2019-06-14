import React from 'react'
import Input from '../../Input/Input'
import InputGroupAddon from '../../InputGroupAddon/InputGroupAddon'
import InputGroupText from '../../InputGroupText/InputGroupText'
import InputGroup from '../InputGroup'

const Example = () => (
  <>
    <InputGroup>
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <Input addon type="checkbox" aria-label="Checkbox for following text input" />
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Check it out" />
    </InputGroup>
    <br />
    <InputGroup>
      <Input placeholder="username" />
      <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>$</InputGroupText>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Dolla dolla billz yo!" />
      <InputGroupAddon addonType="append">
        <InputGroupText>$</InputGroupText>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
      <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
  </>
)

export default Example
