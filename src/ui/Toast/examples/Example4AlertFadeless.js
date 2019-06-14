import React, { useState } from 'react'
import Alert from '../../Alert/Alert'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Alert color="primary" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} fade={false}>
      I am an alert and I can be dismissed without animating!
    </Alert>
  )
}

export default Example
