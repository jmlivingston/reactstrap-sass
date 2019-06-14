import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import NavPills from './examples/NavPills'
import Navs from './examples/Navs'
import NavTabs from './examples/NavTabs'
import NavVertical from './examples/NavVertical'

const config = baseConfigHelpers.getConfig({ name: 'Nav' })

storiesOf('UI|Nav', module).add('Vertical', Navs, config)

storiesOf('UI|Nav', module).add('Tabs', NavVertical, config)

// TODO: info broken due to hooks error
storiesOf('UI|Nav', module).add('Pills', () => <NavTabs />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Nav', module).add('TODO: NavPills', () => <NavPills />, config)
