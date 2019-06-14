import React, { useState } from 'react'
import Button from '../../Button/Button'
import ToastBody from '../../ToastBody/ToastBody'
import ToastHeader from '../../ToastHeader/ToastHeader'
import Toast from '../Toast'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
        Open
      </Button>
      <br />
      <br />
      <Toast isOpen={isOpen}>
        <ToastHeader toggle={() => setIsOpen(!isOpen)}>Toast title</ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ToastBody>
      </Toast>
    </>
  )
}

export default Example
