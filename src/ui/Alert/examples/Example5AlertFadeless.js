import React, { useState } from 'react'
import Alert from '../Alert'

const Example = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <Alert color="primary" isOpen={isVisible} toggle={() => setIsVisible(!isVisible)} fade={false}>
      I am a primary alert and I can be dismissed without animating!
    </Alert>
  )
}

export default Example
