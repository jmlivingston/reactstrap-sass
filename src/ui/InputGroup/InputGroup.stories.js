import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import InputGroupAddon from './examples/InputGroupAddon'
import InputGroupButton from './examples/InputGroupButton'
import InputGroupButtonShorthand from './examples/InputGroupButtonShorthand'
import InputGroupOverview from './examples/InputGroupOverview'
import InputGroupSizing from './examples/InputGroupSizing'

const config = storyConfigHelpers.getConfig({ name: 'InputGroup' })

storiesOf(`${storyConfig.componentPrefix}InputGroup`, module).add('Input Group', InputGroupOverview, config)

storiesOf(`${storyConfig.componentPrefix}InputGroup`, module).add('Addons', InputGroupAddon, config)

storiesOf(`${storyConfig.componentPrefix}InputGroup`, module).add('Addon Sizing', InputGroupSizing, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}InputGroup`, module).add(
  'Buttons / Dropdowns',
  () => <InputGroupButton />,
  config
)

storiesOf(`${storyConfig.componentPrefix}InputGroup`, module).add(
  'Button Shorthand (DEPRECATED)',
  InputGroupButtonShorthand,
  config
)
