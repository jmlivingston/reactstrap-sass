import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Tooltip from './examples/Example0Tooltip'
import Example1TooltipAutoHide from './examples/Example1TooltipAutoHide'
import Example2TooltipMulti from './examples/Example2TooltipMulti'
import Example3TooltipUncontrolled from './examples/Example3TooltipUncontrolled'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Tooltip' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Tooltip', module).add('Tooltip Disable Autohide', () => <Example0Tooltip />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Tooltip', module).add('Tooltips List', () => <Example1TooltipAutoHide />, config)

storiesOf('UI|Tooltip', module).add('Uncontrolled Tooltip', Example2TooltipMulti, config)

storiesOf('UI|Tooltip', module).add('TODO: TooltipUncontrolled', Example3TooltipUncontrolled, config)
