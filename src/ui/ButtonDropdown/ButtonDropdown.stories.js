import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import ButtonDropdown from './examples/ButtonDropdown'
import ButtonDropdownMulti from './examples/ButtonDropdownMulti'
import ButtonDropdownMultiSplit from './examples/ButtonDropdownMultiSplit'
import ButtonDropdownUncontrolled from './examples/ButtonDropdownUncontrolled'

const name = 'ButtonDropdown'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

// TODO: info broken due to hooks error
storiesOf(category, module).add('Single button dropdowns', () => <ButtonDropdownMulti />, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Split button dropdowns', () => <ButtonDropdownMultiSplit />, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Sizing', () => <ButtonDropdown />, config)

storiesOf(category, module).add('Uncontrolled Dropdown', ButtonDropdownUncontrolled, config)
