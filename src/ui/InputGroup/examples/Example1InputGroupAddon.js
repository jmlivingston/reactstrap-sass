import React from 'react'
import Input from '../../Input/Input'
import InputGroupAddon from '../../InputGroupAddon/InputGroupAddon'
import InputGroupText from '../../InputGroupText/InputGroupText'
import InputGroup from '../InputGroup'

const Example = () => (
  <>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>To the Left!</InputGroupText>
      </InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append">
        <InputGroupText>To the Right!</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>To the Left!</InputGroupText>
      </InputGroupAddon>
      <Input placeholder="and..." />
      <InputGroupAddon addonType="append">
        <InputGroupText>To the Right!</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </>
)

export default Example
