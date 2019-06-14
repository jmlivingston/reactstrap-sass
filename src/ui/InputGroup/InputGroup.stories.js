import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0InputGroupOverview from './examples/Example0InputGroupOverview'
import Example1InputGroupAddon from './examples/Example1InputGroupAddon'
import Example2InputGroupSizing from './examples/Example2InputGroupSizing'
import Example3InputGroupButton from './examples/Example3InputGroupButton'
import Example4InputGroupButtonShorthand from './examples/Example4InputGroupButtonShorthand'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'InputGroup' })
  }
}

storiesOf('UI|InputGroup', module).add('Addons', Example0InputGroupOverview, config)

storiesOf('UI|InputGroup', module).add('Addon Sizing', Example1InputGroupAddon, config)

storiesOf('UI|InputGroup', module).add('Buttons / Dropdowns', Example2InputGroupSizing, config)

// TODO: info broken due to hooks error
storiesOf('UI|InputGroup', module).add('Button Shorthand (DEPRECATED)', () => <Example3InputGroupButton />, config)

storiesOf('UI|InputGroup', module).add('InputGroupButtonShorthand', Example4InputGroupButtonShorthand, config)
