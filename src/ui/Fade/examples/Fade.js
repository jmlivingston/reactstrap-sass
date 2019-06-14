import React, { useState } from 'react'
import Button from '../../Button/Button'
import Fade from '../../Fade/Fade'

const Example = () => {
  const [isFadeIn, setIsFadeIn] = useState(true)
  return (
    <>
      <Button color="primary" onClick={() => setIsFadeIn(!isFadeIn)}>
        Toggle Fade
      </Button>
      <Fade in={isFadeIn} tag="h5" className="mt-3">
        This content will fade in and out as the button is pressed
      </Fade>
    </>
  )
}

export default Example
