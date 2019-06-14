import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Toast from './examples/Example0Toast'
import Example1ToastHeaderIcon from './examples/Example1ToastHeaderIcon'
import Example2ToastDismiss from './examples/Example2ToastDismiss'
import Example3AlertUncontrolledDismiss from './examples/Example3AlertUncontrolledDismiss'
import Example4AlertFadeless from './examples/Example4AlertFadeless'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Toast' })
  }
}

storiesOf('UI|Toast', module).add('Toast', Example0Toast, config)

storiesOf('UI|Toast', module).add('Header icons', Example1ToastHeaderIcon, config)

// TODO: info broken due to hooks error
storiesOf('UI|Toast', module).add('Dismissing', () => <Example2ToastDismiss />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Toast', module).add('TODO: AlertUncontrolledDismiss', () => <Example3AlertUncontrolledDismiss />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Toast', module).add('TODO: AlertFadeless', () => <Example4AlertFadeless />, config)
