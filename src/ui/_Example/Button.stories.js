import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
import Button from './Button'

function ButtonDemo() {
  return <Button color="primary">TODO: Button</Button>
}

storiesOf('Button', module).add('Button', ButtonDemo, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: `import Button from '${packageJson.name}/cjs/ui/Button'`
  }
})
