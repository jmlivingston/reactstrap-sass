import React from 'react';
import Input from '../../Input/Input';
import Form from '../Form';

const Example = () => (
  <Form>
    <Input placeholder="lg" bsSize="lg" />
    <Input placeholder="default" />
    <Input placeholder="sm" bsSize="sm" />
    <Input type="select" bsSize="lg">
      <option>Large Select</option>
    </Input>
    <Input type="select">
      <option>Default Select</option>
    </Input>
    <Input type="select" bsSize="sm">
      <option>Small Select</option>
    </Input>
  </Form>
)

export default Example
