import React, { useState } from 'react'
import Button from '../../Button/Button'
import Form from '../../Form/Form'
import FormGroup from '../../FormGroup/FormGroup'
import Input from '../../Input/Input'
import Label from '../../Label/Label'
import ModalBody from '../../ModalBody/ModalBody'
import ModalFooter from '../../ModalFooter/ModalFooter'
import ModalHeader from '../../ModalHeader/ModalHeader'
import Modal from '../Modal'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isUnmountOnClose, setIsUnmountOnClose] = useState(true)
  return (
    <>
      <Form inline onSubmit={e => e.preventDefault()}>
        <FormGroup>
          <Label for="unmountOnClose">UnmountOnClose value</Label>{' '}
          <Input
            type="select"
            name="unmountOnClose"
            id="unmountOnClose"
            onChange={evt => setIsUnmountOnClose(JSON.parse(evt.target.value))}>
            <option value="true">true</option>
            <option value="false">false</option>
          </Input>
        </FormGroup>{' '}
        <Button color="danger" onClick={() => setIsOpen(!isOpen)}>
          Open
        </Button>
      </Form>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} unmountOnClose={isUnmountOnClose}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={() => setIsOpen(!isOpen)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Example
