import React from 'react'
import Button from '../../Button/Button'
import FormGroup from '../../FormGroup/FormGroup'
import Input from '../../Input/Input'
import Label from '../../Label/Label'
import Form from '../Form'

const Example = () => (
  <Form inline>
    <FormGroup>
      <Label for="exampleEmail" hidden>
        Email
      </Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
    </FormGroup>{' '}
    <FormGroup>
      <Label for="examplePassword" hidden>
        Password
      </Label>
      <Input type="password" name="password" id="examplePassword" placeholder="Password" />
    </FormGroup>{' '}
    <Button>Submit</Button>
  </Form>
)

export default Example
