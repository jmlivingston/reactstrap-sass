import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Navs from './examples/Navs'
import NavVertical from './examples/NavVertical'
import NavTabs from './examples/NavTabs'
import NavPills from './examples/NavPills'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Nav' })
  }
}

storiesOf('UI|Nav', module).add('Vertical', Navs, config)

storiesOf('UI|Nav', module).add('Tabs', NavVertical, config)

// TODO: info broken due to hooks error
storiesOf('UI|Nav', module).add('Pills', () => <NavTabs />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Nav', module).add('TODO: NavPills', () => <NavPills />, config)
