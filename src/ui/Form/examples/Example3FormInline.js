import React from 'react'
import Button from '../../Button/Button'
import FormGroup from '../../FormGroup/FormGroup'
import Input from '../../Input/Input'
import Label from '../../Label/Label'
import Form from '../Form'

const Example = () => (
  <Form inline>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">
        Email
      </Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="examplePassword" className="mr-sm-2">
        Password
      </Label>
      <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
    </FormGroup>
    <Button>Submit</Button>
  </Form>
)

export default Example
