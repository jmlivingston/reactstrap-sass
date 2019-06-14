import React, { useState } from 'react'
import Tooltip from '../Tooltip'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <p>
        Sometimes you need to allow users to select text within a{' '}
        <span style={{ textDecoration: 'underline', color: 'blue' }} href="/" id="DisabledAutoHideExample">
          tooltip
        </span>
        .
      </p>
      <Tooltip
        placement="top"
        isOpen={isOpen}
        autohide={false}
        target="DisabledAutoHideExample"
        toggle={() => setIsOpen(!isOpen)}>
        Try to select this text!
      </Tooltip>
    </>
  )
}

export default Example
