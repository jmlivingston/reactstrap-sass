import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Dropdown from './examples/Example0Dropdown'
import Example1DropdownSizing from './examples/Example1DropdownSizing'
import Example2CustomDropdown from './examples/Example2CustomDropdown'
import Example3DropdownUncontrolled from './examples/Example3DropdownUncontrolled'
import Example4DropdownSetActiveFromChild from './examples/Example4DropdownSetActiveFromChild'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Dropdown' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Dropdown', module).add('Alignment', () => <Example0Dropdown />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Dropdown', module).add('Menu Headers', () => <Example1DropdownSizing />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Dropdown', module).add('Menu Dividers', () => <Example2CustomDropdown />, config)

storiesOf('UI|Dropdown', module).add('Menu Items', Example3DropdownUncontrolled, config)

storiesOf('UI|Dropdown', module).add('Disabled Menu Items', Example4DropdownSetActiveFromChild, config)
