import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Collapse from './examples/Collapse'
import CollapseEvents from './examples/CollapseEvents'
import CollapseUncontrolled from './examples/CollapseUncontrolled'

const config = storyConfigHelpers.getConfig({ name: 'Collapse' })

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Collapse`, module).add('Collapse', () => <Collapse />, config)

storiesOf(`${storyConfig.componentPrefix}Collapse`, module).add('Events', () => <CollapseUncontrolled />, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Collapse`, module).add(
  'Uncontrolled Collapse',
  () => <CollapseEvents />,
  config
)
