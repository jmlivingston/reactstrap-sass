import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Popover from './examples/Popover'
import PopoverFocus from './examples/PopoverFocus'
import PopoverMulti from './examples/PopoverMulti'
import PopoverUncontrolled from './examples/PopoverUncontrolled'

const config = baseConfigHelpers.getConfig({ name: 'Popover' })

// TODO: info broken due to hooks error
storiesOf('UI|Popover', module).add('Popovers Trigger', () => <Popover />, config)

storiesOf('UI|Popover', module).add('Popovers Placements', PopoverMulti, config)

storiesOf('UI|Popover', module).add('UncontrolledPopovers', PopoverFocus, config)

storiesOf('UI|Popover', module).add('TODO: PopoverUncontrolled', PopoverUncontrolled, config)
