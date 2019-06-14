import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Tooltip from './examples/Tooltip'
import TooltipAutoHide from './examples/TooltipAutoHide'
import TooltipMulti from './examples/TooltipMulti'
import TooltipUncontrolled from './examples/TooltipUncontrolled'

const name = 'Tooltip'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

// TODO: info broken due to hooks error
storiesOf(category, module).add('Tooltips', () => <Tooltip />, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Tooltip Disable Autohide', () => <TooltipAutoHide />, config)

storiesOf(category, module).add('Tooltips List', TooltipMulti, config)

storiesOf(category, module).add(
  'Uncontrolled Tooltip',
  TooltipUncontrolled,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledTooltip</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.</p>`
  })
)
