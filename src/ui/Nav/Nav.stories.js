import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import NavPills from './examples/NavPills'
import Navs from './examples/Navs'
import NavTabs from './examples/NavTabs'
import NavVertical from './examples/NavVertical'

const name = 'Nav'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Nav', Navs, config)

storiesOf(category, module).add('Vertical', NavVertical, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Tabs', () => <NavTabs />, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Pills', () => <NavPills />, config)
