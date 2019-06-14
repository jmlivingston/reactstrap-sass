import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Popover from './examples/Popover'
import PopoverFocus from './examples/PopoverFocus'
import PopoverMulti from './examples/PopoverMulti'
import PopoverUncontrolled from './examples/PopoverUncontrolled'

const name = 'Popover'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

// TODO: info broken due to hooks error
storiesOf(category, module).add(
  'Popovers',
  () => <Popover />,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>Popovers are built with <a href="https://popper.js.org/">https://popper.js.org/</a> via <a href="https://github.com/souporserious/react-popper">https://github.com/souporserious/react-popper</a>.</p>`
  })
)

storiesOf(category, module).add('Popovers Trigger', PopoverMulti, config)

storiesOf(category, module).add(
  'Popovers Trigger',
  PopoverFocus,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>Trigger each popover to see information about the trigger</p>`
  })
)

storiesOf(category, module).add('UncontrolledPopovers', PopoverUncontrolled, config)
