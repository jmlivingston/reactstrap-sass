import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Dropdown from './examples/Dropdown'
import DropdownSizing from './examples/DropdownSizing'
import CustomDropdown from './examples/CustomDropdown'
import DropdownUncontrolled from './examples/DropdownUncontrolled'
import DropdownSetActiveFromChild from './examples/DropdownSetActiveFromChild'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Dropdown' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Dropdown', module).add('Alignment', () => <Dropdown />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Dropdown', module).add('Menu Headers', () => <DropdownSizing />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Dropdown', module).add('Menu Dividers', () => <CustomDropdown />, config)

storiesOf('UI|Dropdown', module).add('Menu Items', DropdownUncontrolled, config)

storiesOf('UI|Dropdown', module).add('Disabled Menu Items', DropdownSetActiveFromChild, config)
