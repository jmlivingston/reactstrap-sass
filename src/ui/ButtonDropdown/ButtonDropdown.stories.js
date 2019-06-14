import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import ButtonDropdown from './examples/ButtonDropdown'
import ButtonDropdownMulti from './examples/ButtonDropdownMulti'
import ButtonDropdownMultiSplit from './examples/ButtonDropdownMultiSplit'
import ButtonDropdownUncontrolled from './examples/ButtonDropdownUncontrolled'

const config = baseConfigHelpers.getConfig({ name: 'ButtonDropdown' })

// TODO: info broken due to hooks error
storiesOf('UI | ButtonDropdown', module).add('Single button dropdowns', () => <ButtonDropdownMulti />, config)

// TODO: info broken due to hooks error
storiesOf('UI | ButtonDropdown', module).add('Split button dropdowns', () => <ButtonDropdownMultiSplit />, config)

// TODO: info broken due to hooks error
storiesOf('UI | ButtonDropdown', module).add('Sizing', () => <ButtonDropdown />, config)

storiesOf('UI | ButtonDropdown', module).add('Uncontrolled Dropdown', ButtonDropdownUncontrolled, config)
