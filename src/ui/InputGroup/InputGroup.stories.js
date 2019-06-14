import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import InputGroupAddon from './examples/InputGroupAddon'
import InputGroupButton from './examples/InputGroupButton'
import InputGroupButtonShorthand from './examples/InputGroupButtonShorthand'
import InputGroupOverview from './examples/InputGroupOverview'
import InputGroupSizing from './examples/InputGroupSizing'

const config = baseConfigHelpers.getConfig({ name: 'InputGroup' })

storiesOf('UI | InputGroup', module).add('Input Group', InputGroupOverview, config)

storiesOf('UI | InputGroup', module).add('Addons', InputGroupAddon, config)

storiesOf('UI | InputGroup', module).add('Addon Sizing', InputGroupSizing, config)

// TODO: info broken due to hooks error
storiesOf('UI | InputGroup', module).add('Buttons / Dropdowns', () => <InputGroupButton />, config)

storiesOf('UI | InputGroup', module).add('Button Shorthand (DEPRECATED', InputGroupButtonShorthand, config)
