import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Tooltip from './examples/Tooltip'
import TooltipAutoHide from './examples/TooltipAutoHide'
import TooltipMulti from './examples/TooltipMulti'
import TooltipUncontrolled from './examples/TooltipUncontrolled'

const config = storyConfigHelpers.getConfig({ name: 'Tooltip' })

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Tooltip`, module).add('Tooltips', () => <Tooltip />, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Tooltip`, module).add(
  'Tooltip Disable Autohide',
  () => <TooltipAutoHide />,
  config
)

storiesOf(`${storyConfig.componentPrefix}Tooltip`, module).add('Tooltips List', TooltipMulti, config)

storiesOf(`${storyConfig.componentPrefix}Tooltip`, module).add('Uncontrolled Tooltip', TooltipUncontrolled, config)
