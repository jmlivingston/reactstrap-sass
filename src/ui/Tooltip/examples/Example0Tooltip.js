import React, { useState } from 'react'
import Tooltip from '../Tooltip'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <p>
        Somewhere in here is a{' '}
        <span style={{ textDecoration: 'underline', color: 'blue' }} href="/" id="TooltipExample">
          tooltip
        </span>
        .
      </p>
      <Tooltip placement="right" isOpen={isOpen} target="TooltipExample" toggle={() => setIsOpen(!isOpen)}>
        Hello world!
      </Tooltip>
    </>
  )
}

export default Example
