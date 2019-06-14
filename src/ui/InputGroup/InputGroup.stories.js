import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import InputGroupOverview from './examples/InputGroupOverview'
import InputGroupAddon from './examples/InputGroupAddon'
import InputGroupSizing from './examples/InputGroupSizing'
import InputGroupButton from './examples/InputGroupButton'
import InputGroupButtonShorthand from './examples/InputGroupButtonShorthand'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'InputGroup' })
  }
}

storiesOf('UI|InputGroup', module).add('Addons', InputGroupOverview, config)

storiesOf('UI|InputGroup', module).add('Addon Sizing', InputGroupAddon, config)

storiesOf('UI|InputGroup', module).add('Buttons / Dropdowns', InputGroupSizing, config)

// TODO: info broken due to hooks error
storiesOf('UI|InputGroup', module).add('Button Shorthand (DEPRECATED)', () => <InputGroupButton />, config)

storiesOf('UI|InputGroup', module).add('InputGroupButtonShorthand', InputGroupButtonShorthand, config)
