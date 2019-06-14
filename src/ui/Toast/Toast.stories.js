import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
// import AlertFadeless from './examples/AlertFadeless'
// import AlertUncontrolledDismiss from './examples/AlertUncontrolledDismiss'
import Toast from './examples/Toast'
import ToastDismiss from './examples/ToastDismiss'
import ToastHeaderIcon from './examples/ToastHeaderIcon'

const config = baseConfigHelpers.getConfig({ name: 'Toast' })

storiesOf('UI|Toast', module).add('Toast', Toast, config)

storiesOf('UI|Toast', module).add('Header icons', ToastHeaderIcon, config)

// TODO: info broken due to hooks error
storiesOf('UI|Toast', module).add('Dismissing', () => <ToastDismiss />, config)

// // TODO: info broken due to hooks error
// storiesOf('UI|Toast', module).add('TODO: AlertUncontrolledDismiss', () => <AlertUncontrolledDismiss />, config)

// // TODO: info broken due to hooks error
// storiesOf('UI|Toast', module).add('TODO: AlertFadeless', () => <AlertFadeless />, config)
