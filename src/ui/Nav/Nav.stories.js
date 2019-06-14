import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Navs from './examples/Example0Navs'
import Example1NavVertical from './examples/Example1NavVertical'
import Example2NavTabs from './examples/Example2NavTabs'
import Example3NavPills from './examples/Example3NavPills'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Nav' })
  }
}

storiesOf('UI|Nav', module).add('Vertical', Example0Navs, config)

storiesOf('UI|Nav', module).add('Tabs', Example1NavVertical, config)

// TODO: info broken due to hooks error
storiesOf('UI|Nav', module).add('Pills', () => <Example2NavTabs />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Nav', module).add('TODO: NavPills', () => <Example3NavPills />, config)
