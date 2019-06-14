import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfigHelpers } from '../../../.storybook/storyConfig'
// import AlertFadeless from './examples/AlertFadeless'
// import AlertUncontrolledDismiss from './examples/AlertUncontrolledDismiss'
import Toast from './examples/Toast'
import ToastDismiss from './examples/ToastDismiss'
import ToastHeaderIcon from './examples/ToastHeaderIcon'

const name = 'Toast'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Toast', Toast, config)

storiesOf(category, module).add('Header icons', ToastHeaderIcon, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Dismissing', () => <ToastDismiss />, config)

// // TODO: info broken due to hooks error
// storiesOf(category, module).add('TODO: AlertUncontrolledDismiss', () => <AlertUncontrolledDismiss />, config)

// // TODO: info broken due to hooks error
// storiesOf(category, module).add('TODO: AlertFadeless', () => <AlertFadeless />, config)
