import React, { useState } from 'react'
import Button from '../../Button/Button'
import ModalBody from '../../ModalBody/ModalBody'
import ModalFooter from '../../ModalFooter/ModalFooter'
import ModalHeader from '../../ModalHeader/ModalHeader'
import Modal from '../Modal'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={() => setIsOpen(!isOpen)}>
      &times;
    </button>
  )
  return (
    <>
      <Button color="danger" onClick={() => setIsOpen(!isOpen)}>
        Open
      </Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <b>Look at the top right of the page/viewport!</b>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
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
