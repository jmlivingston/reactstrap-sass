import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import InputGroupAddon from './examples/InputGroupAddon'
import InputGroupButton from './examples/InputGroupButton'
import InputGroupButtonShorthand from './examples/InputGroupButtonShorthand'
import InputGroupOverview from './examples/InputGroupOverview'
import InputGroupSizing from './examples/InputGroupSizing'

const name = 'InputGroup'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Input Group', InputGroupOverview, config)

storiesOf(category, module).add('Addons', InputGroupAddon, config)

storiesOf(category, module).add('Addon Sizing', InputGroupSizing, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Buttons / Dropdowns', () => <InputGroupButton />, config)

storiesOf(category, module).add(
  'Button Shorthand (DEPRECATED)',
  InputGroupButtonShorthand,
  storyConfigHelpers.getConfig({
    name: 'Input Group',
    description: `<p>Button shorthand is deprecated. Below are the updated examples of how to use <code>InputGroupAddon</code> to accomplish the same output. </p><p style={{ textDecoration: 'line-through' }}>Button shorthand is a convenience method for adding just a button. It is triggered when only a single string is the child. A Button will be created and all of the props will be passed to it with the exception of <code>groupClassName</code> and <code>groupAttributes</code>, which are used to added classes and attributes to the wrapping container. This means you can add your <code>onClick</code> and other handlers directly to <code>InputGroupButton</code>. If you want your string to not be wrapped in a button, then you really want to use <code>InputGroupAddon</code> (see Addons above for that).</p>`
  })
)
