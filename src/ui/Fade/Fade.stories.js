import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Fade from './examples/Fade'

const config = storyConfigHelpers.getConfig({ name: 'Fade' })

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Fade`, module).add('Fade', () => <Fade />, config)
