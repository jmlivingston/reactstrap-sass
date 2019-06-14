import React from 'react';
import Input from '../../Input/Input';
import InputGroupAddon from '../../InputGroupAddon/InputGroupAddon';
import InputGroup from '../InputGroup';

const Example = () => (
  <>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup size="sm">
      <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
      <Input />
    </InputGroup>
  </>
)

export default Example
