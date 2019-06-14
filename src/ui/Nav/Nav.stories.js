import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import NavPills from './examples/NavPills'
import Navs from './examples/Navs'
import NavTabs from './examples/NavTabs'
import NavVertical from './examples/NavVertical'

const config = storyConfigHelpers.getConfig({ name: 'Nav' })

storiesOf(`${storyConfig.componentPrefix}Nav`, module).add('Nav', Navs, config)

storiesOf(`${storyConfig.componentPrefix}Nav`, module).add('Vertical', NavVertical, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Nav`, module).add('Tabs', () => <NavTabs />, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Nav`, module).add('Pills', () => <NavPills />, config)
