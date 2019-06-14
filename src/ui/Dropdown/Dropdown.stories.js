import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import CustomDropdown from './examples/CustomDropdown'
import Dropdown from './examples/Dropdown'
import DropdownSetActiveFromChild from './examples/DropdownSetActiveFromChild'
import DropdownSizing from './examples/DropdownSizing'
import DropdownUncontrolled from './examples/DropdownUncontrolled'

const config = baseConfigHelpers.getConfig({ name: 'Dropdown' })

// TODO: info broken due to hooks error
storiesOf('UI | Dropdown', module).add('Alignment', () => <Dropdown />, config)

// TODO: info broken due to hooks error
storiesOf('UI | Dropdown', module).add('Menu Headers', () => <DropdownSizing />, config)

// TODO: info broken due to hooks error
storiesOf('UI | Dropdown', module).add('Menu Dividers', () => <CustomDropdown />, config)

storiesOf('UI | Dropdown', module).add('Menu Items', DropdownUncontrolled, config)

storiesOf('UI | Dropdown', module).add('Disabled Menu Items', DropdownSetActiveFromChild, config)