import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import React from 'react'
import Button from './Button'

function Example2() {
  return <>
    <Button color="primary" size="lg">Large Button</Button>{' '}
<Button color="secondary" size="lg">Large Button</Button><br /><Button color="primary" size="sm">Small Button</Button>{' '}
<Button color="secondary" size="sm">Small Button</Button><br /><Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>
  </>
}



storiesOf('Button', module).add('Sizes', Example2, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Button' })
  }
})
      
