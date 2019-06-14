import React from 'react'
import UncontrolledTooltip from '../../UncontrolledTooltip/UncontrolledTooltip'

const Example = () => (
  <>
    <p>
      Somewhere in here is a{' '}
      <span style={{ textDecoration: 'underline', color: 'blue' }} href="/" id="UncontrolledTooltipExample">
        tooltip
      </span>
      .
    </p>
    <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
      Hello world!
    </UncontrolledTooltip>
  </>
)

export default Example
