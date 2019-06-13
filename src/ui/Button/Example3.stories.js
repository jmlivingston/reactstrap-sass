import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import React from 'react'
import Button from './Button'

function Example3() {
  return <>
    <Button color="primary" size="lg" active>Primary link</Button>{' '}
<Button color="secondary" size="lg" active>Link</Button>
  </>
}



storiesOf('Button', module).add('Active State', Example3, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Button' })
  }
})
      
