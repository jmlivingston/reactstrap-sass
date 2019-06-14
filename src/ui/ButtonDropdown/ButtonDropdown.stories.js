import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import ButtonDropdown from './examples/ButtonDropdown'
import ButtonDropdownMulti from './examples/ButtonDropdownMulti'
import ButtonDropdownMultiSplit from './examples/ButtonDropdownMultiSplit'
import ButtonDropdownUncontrolled from './examples/ButtonDropdownUncontrolled'

const config = storyConfigHelpers.getConfig({ name: 'ButtonDropdown' })

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}ButtonDropdown`, module).add(
  'Single button dropdowns',
  () => <ButtonDropdownMulti />,
  config
)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}ButtonDropdown`, module).add(
  'Split button dropdowns',
  () => <ButtonDropdownMultiSplit />,
  config
)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}ButtonDropdown`, module).add('Sizing', () => <ButtonDropdown />, config)

storiesOf(`${storyConfig.componentPrefix}ButtonDropdown`, module).add(
  'Uncontrolled Dropdown',
  ButtonDropdownUncontrolled,
  config
)
