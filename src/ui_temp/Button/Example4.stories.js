import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import React from 'react'
import Button from './Button'

function Example4() {
  return <>
    <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
<Button color="secondary" size="lg" disabled>Button</Button>
  </>
}



storiesOf('Button', module).add('Disabled State', Example4, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Button' })
  }
})
      
