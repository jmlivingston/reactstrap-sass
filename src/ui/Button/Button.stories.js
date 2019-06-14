import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Button from './examples/Example0Button'
import Example1ButtonOutline from './examples/Example1ButtonOutline'
import Example2ButtonStateful from './examples/Example2ButtonStateful'
import Example3ButtonCloseIcon from './examples/Example3ButtonCloseIcon'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Button' })
  }
}

storiesOf('UI|Button', module).add('Outline Buttons', Example0Button, config)

storiesOf('UI|Button', module).add('Sizes', Example1ButtonOutline, config)

// TODO: info broken due to hooks error
storiesOf('UI|Button', module).add('Active State', () => <Example2ButtonStateful />, config)

storiesOf('UI|Button', module).add('Disabled State', Example3ButtonCloseIcon, config)
