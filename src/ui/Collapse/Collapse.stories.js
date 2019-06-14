import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Collapse from './examples/Example0Collapse'
import Example1CollapseUncontrolled from './examples/Example1CollapseUncontrolled'
import Example2CollapseEvents from './examples/Example2CollapseEvents'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Collapse' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Collapse', module).add('Collapse', () => <Example0Collapse />, config)

storiesOf('UI|Collapse', module).add('Events', () => <Example1CollapseUncontrolled />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Collapse', module).add('Uncontrolled Collapse', () => <Example2CollapseEvents />, config)
