import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Alert from './examples/Alert'
import AlertLink from './examples/AlertLink'
import AlertContent from './examples/AlertContent'
import AlertDismiss from './examples/AlertDismiss'
import AlertUncontrolledDismiss from './examples/AlertUncontrolledDismiss'
import AlertFadeless from './examples/AlertFadeless'
import AlertUncontrolledFadeless from './examples/AlertUncontrolledFadeless'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Alert' })
  }
}

storiesOf('UI|Alert', module).add('Alert', Alert, config)

storiesOf('UI|Alert', module).add('Link color', AlertLink, config)

storiesOf('UI|Alert', module).add('Additional content', AlertContent, config)

// TODO: info broken due to hooks error
storiesOf('UI|Alert', module).add('Dismissing', () => <AlertDismiss />, config)

storiesOf('UI|Alert', module).add('Uncontrolled [disable] Alerts', AlertUncontrolledDismiss, config)

// TODO: info broken due to hooks error
storiesOf('UI|Alert', module).add('Alerts without fade', () => <AlertFadeless />, config)

storiesOf('UI|Alert', module).add('Alerts without fade (uncontrolled)', AlertUncontrolledFadeless, config)
