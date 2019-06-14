import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0ButtonDropdownMulti from './examples/Example0ButtonDropdownMulti'
import Example1ButtonDropdownMultiSplit from './examples/Example1ButtonDropdownMultiSplit'
import Example2ButtonDropdown from './examples/Example2ButtonDropdown'
import Example3ButtonDropdownUncontrolled from './examples/Example3ButtonDropdownUncontrolled'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'ButtonDropdown' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|ButtonDropdown', module).add('Single button dropdowns', () => <Example0ButtonDropdownMulti />, config)

// TODO: info broken due to hooks error
storiesOf('UI|ButtonDropdown', module).add('Split button dropdowns', () => <Example1ButtonDropdownMultiSplit />, config)

// TODO: info broken due to hooks error
storiesOf('UI|ButtonDropdown', module).add('Sizing', () => <Example2ButtonDropdown />, config)

storiesOf('UI|ButtonDropdown', module).add('Uncontrolled Dropdown', Example3ButtonDropdownUncontrolled, config)
