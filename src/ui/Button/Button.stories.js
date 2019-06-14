import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Button from './examples/Button'
import ButtonCloseIcon from './examples/ButtonCloseIcon'
import ButtonOutline from './examples/ButtonOutline'
import ButtonStateful from './examples/ButtonStateful'

const config = baseConfigHelpers.getConfig({ name: 'Button' })

storiesOf('UI | Button', module).add('Outline Buttons', Button, config)

storiesOf('UI | Button', module).add('Sizes', ButtonOutline, config)

// TODO: info broken due to hooks error
storiesOf('UI | Button', module).add('Active State', () => <ButtonStateful />, config)

storiesOf('UI | Button', module).add('Disabled State', ButtonCloseIcon, config)
