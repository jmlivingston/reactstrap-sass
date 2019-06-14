import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Button from './examples/Button'
import ButtonCloseIcon from './examples/ButtonCloseIcon'
import ButtonOutline from './examples/ButtonOutline'
import ButtonStateful from './examples/ButtonStateful'

const config = storyConfigHelpers.getConfig({ name: 'Button' })

storiesOf(`${storyConfig.componentPrefix}Button`, module).add('Buttons', Button, config)

storiesOf(`${storyConfig.componentPrefix}Button`, module).add('Outline Buttons', ButtonOutline, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Button`, module).add('Active State', () => <ButtonStateful />, config)

storiesOf(`${storyConfig.componentPrefix}Button`, module).add('Disabled State', ButtonCloseIcon, config)
