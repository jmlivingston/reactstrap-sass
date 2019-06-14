import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Fade from './examples/Fade'

const config = baseConfigHelpers.getConfig({ name: 'Fade' })

// TODO: info broken due to hooks error
storiesOf('UI|Fade', module).add('Fade', () => <Fade />, config)
