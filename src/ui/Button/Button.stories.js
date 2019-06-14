import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Button from './examples/Button'
import ButtonOutline from './examples/ButtonOutline'
import ButtonStateful from './examples/ButtonStateful'
import ButtonCloseIcon from './examples/ButtonCloseIcon'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Button' })
  }
}

storiesOf('UI|Button', module).add('Outline Buttons', Button, config)

storiesOf('UI|Button', module).add('Sizes', ButtonOutline, config)

// TODO: info broken due to hooks error
storiesOf('UI|Button', module).add('Active State', () => <ButtonStateful />, config)

storiesOf('UI|Button', module).add('Disabled State', ButtonCloseIcon, config)
