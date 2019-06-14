import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Fade from './examples/Example0Fade'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Fade' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Fade', module).add('Fade', () => <Example0Fade />, config)
