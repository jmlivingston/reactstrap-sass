import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Collapse from './examples/Collapse'
import CollapseUncontrolled from './examples/CollapseUncontrolled'
import CollapseEvents from './examples/CollapseEvents'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Collapse' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Collapse', module).add('Collapse', () => <Collapse />, config)

storiesOf('UI|Collapse', module).add('Events', () => <CollapseUncontrolled />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Collapse', module).add('Uncontrolled Collapse', () => <CollapseEvents />, config)
