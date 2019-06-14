import React from 'react'
import FormGroup from '../../FormGroup/FormGroup'
import Input from '../../Input/Input'
import Label from '../../Label/Label'
import Form from '../Form'

const Example = () => (
  <Form>
    <FormGroup check inline>
      <Label check>
        <Input type="checkbox" /> Some input
      </Label>
    </FormGroup>
    <FormGroup check inline>
      <Label check>
        <Input type="checkbox" /> Some other input
      </Label>
    </FormGroup>
  </Form>
)

export default Example
