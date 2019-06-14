import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Fade from './examples/Fade'

const name = 'Fade'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

// TODO: info broken due to hooks error
storiesOf(category, module).add('Fade', () => <Fade />, config)
