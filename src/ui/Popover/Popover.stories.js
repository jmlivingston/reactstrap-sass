import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Popover from './examples/Example0Popover'
import Example1PopoverMulti from './examples/Example1PopoverMulti'
import Example2PopoverFocus from './examples/Example2PopoverFocus'
import Example3PopoverUncontrolled from './examples/Example3PopoverUncontrolled'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Popover' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Popover', module).add('Popovers Trigger', () => <Example0Popover />, config)

storiesOf('UI|Popover', module).add('Popovers Placements', Example1PopoverMulti, config)

storiesOf('UI|Popover', module).add('UncontrolledPopovers', Example2PopoverFocus, config)

storiesOf('UI|Popover', module).add('TODO: PopoverUncontrolled', Example3PopoverUncontrolled, config)
