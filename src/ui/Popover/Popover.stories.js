import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Popover from './examples/Popover'
import PopoverFocus from './examples/PopoverFocus'
import PopoverMulti from './examples/PopoverMulti'
import PopoverUncontrolled from './examples/PopoverUncontrolled'

const config = storyConfigHelpers.getConfig({ name: 'Popover' })

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Popover`, module).add('Popover', () => <Popover />, config)

storiesOf(`${storyConfig.componentPrefix}Popover`, module).add('Popovers Trigger', PopoverMulti, config)

storiesOf(`${storyConfig.componentPrefix}Popover`, module).add('Popovers Placements', PopoverFocus, config)

storiesOf(`${storyConfig.componentPrefix}Popover`, module).add('UncontrolledPopovers', PopoverUncontrolled, config)
