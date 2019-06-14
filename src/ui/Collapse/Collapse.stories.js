import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Collapse from './examples/Collapse'
import CollapseEvents from './examples/CollapseEvents'
import CollapseUncontrolled from './examples/CollapseUncontrolled'

const config = baseConfigHelpers.getConfig({ name: 'Collapse' })

// TODO: info broken due to hooks error
storiesOf('UI | Collapse', module).add('Collapse', () => <Collapse />, config)

storiesOf('UI | Collapse', module).add('Events', () => <CollapseUncontrolled />, config)

// TODO: info broken due to hooks error
storiesOf('UI | Collapse', module).add('Uncontrolled Collapse', () => <CollapseEvents />, config)
