import React from 'react'
import FormFeedback from '../../FormFeedback/FormFeedback'
import FormGroup from '../../FormGroup/FormGroup'
import FormText from '../../FormText/FormText'
import Input from '../../Input/Input'
import Label from '../../Label/Label'
import Form from '../Form'

const Example = () => (
  <Form>
    <FormGroup>
      <Label for="exampleEmail">Input without validation</Label>
      <Input />
      <FormFeedback>You will not be able to see this</FormFeedback>
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Valid input</Label>
      <Input valid />
      <FormFeedback valid>Sweet! that name is available</FormFeedback>
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Invalid input</Label>
      <Input invalid />
      <FormFeedback>Oh noes! that name is already taken</FormFeedback>
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Input without validation</Label>
      <Input />
      <FormFeedback tooltip>You will not be able to see this</FormFeedback>
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Valid input</Label>
      <Input valid />
      <FormFeedback valid tooltip>
        Sweet! that name is available
      </FormFeedback>
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Invalid input</Label>
      <Input invalid />
      <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
  </Form>
)

export default Example
