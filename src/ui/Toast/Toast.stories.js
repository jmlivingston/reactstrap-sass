import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Toast from './examples/Toast'
import ToastHeaderIcon from './examples/ToastHeaderIcon'
import ToastDismiss from './examples/ToastDismiss'
import AlertUncontrolledDismiss from './examples/AlertUncontrolledDismiss'
import AlertFadeless from './examples/AlertFadeless'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Toast' })
  }
}

storiesOf('UI|Toast', module).add('Toast', Toast, config)

storiesOf('UI|Toast', module).add('Header icons', ToastHeaderIcon, config)

// TODO: info broken due to hooks error
storiesOf('UI|Toast', module).add('Dismissing', () => <ToastDismiss />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Toast', module).add('TODO: AlertUncontrolledDismiss', () => <AlertUncontrolledDismiss />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Toast', module).add('TODO: AlertFadeless', () => <AlertFadeless />, config)
