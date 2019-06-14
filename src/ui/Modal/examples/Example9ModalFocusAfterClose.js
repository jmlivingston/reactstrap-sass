import React, { useState } from 'react';
import Button from '../../Button/Button';
import Form from '../../Form/Form';
import FormGroup from '../../FormGroup/FormGroup';
import Input from '../../Input/Input';
import Label from '../../Label/Label';
import ModalBody from '../../ModalBody/ModalBody';
import ModalFooter from '../../ModalFooter/ModalFooter';
import Modal from '../Modal';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasFocusAfterClose, setHasFocusAfterClose] = useState(false)
  return (
    <>
      <Form inline onSubmit={e => e.preventDefault()}>
        <FormGroup>
          <Label for="focusAfterClose">Focus After Close</Label>
          <Input
            className="mx-2"
            type="select"
            id="focusAfterClose"
            onChange={({ target: { value } }) => setHasFocusAfterClose(JSON.parse(value))}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Input>
        </FormGroup>
        <Button color="danger" onClick={() => setIsOpen(!isOpen)}>
          Open
        </Button>
      </Form>
      <Modal returnFocusAfterClose={hasFocusAfterClose} isOpen={isOpen}>
        <ModalBody>
          Observe the "Open" button. It will be focused after close when "returnFocusAfterClose" is true and will not be
          focused if "returnFocusAfterClose" is false.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Example
