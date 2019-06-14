import React, { useState } from 'react'
import Alert from '../Alert'

const Example = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <Alert color="info" isOpen={isVisible} toggle={() => setIsVisible(!isVisible)}>
      I am an alert and I can be dismissed!
    </Alert>
  )
}

export default Example
