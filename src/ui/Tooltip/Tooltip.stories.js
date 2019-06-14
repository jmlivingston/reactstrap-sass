import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Tooltip from './examples/Tooltip'
import TooltipAutoHide from './examples/TooltipAutoHide'
import TooltipMulti from './examples/TooltipMulti'
import TooltipUncontrolled from './examples/TooltipUncontrolled'

const config = baseConfigHelpers.getConfig({ name: 'Tooltip' })

// TODO: info broken due to hooks error
storiesOf('UI|Tooltip', module).add('Tooltip Disable Autohide', () => <Tooltip />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Tooltip', module).add('Tooltips List', () => <TooltipAutoHide />, config)

storiesOf('UI|Tooltip', module).add('Uncontrolled Tooltip', TooltipMulti, config)

storiesOf('UI|Tooltip', module).add('TODO: TooltipUncontrolled', TooltipUncontrolled, config)
