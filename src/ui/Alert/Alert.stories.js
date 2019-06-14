import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Alert from './examples/Alert'
import AlertContent from './examples/AlertContent'
import AlertDismiss from './examples/AlertDismiss'
import AlertFadeless from './examples/AlertFadeless'
import AlertLink from './examples/AlertLink'
import AlertUncontrolledDismiss from './examples/AlertUncontrolledDismiss'
import AlertUncontrolledFadeless from './examples/AlertUncontrolledFadeless'

const config = baseConfigHelpers.getConfig({ name: 'Alert' })

storiesOf('UI | Alert', module).add('Alerts', Alert, config)

storiesOf('UI | Alert', module).add('Link color', AlertLink, config)

storiesOf('UI | Alert', module).add('Additional content', AlertContent, config)

// TODO: info broken due to hooks error
storiesOf('UI | Alert', module).add('Dismissing', () => <AlertDismiss />, config)

storiesOf('UI | Alert', module).add(
  'Uncontrolled [disable] Alerts',
  AlertUncontrolledDismiss,
  baseConfigHelpers.getConfig({
    name: 'UncontrolledAlert',
    description: `<p>For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledAlert</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.</p>`
  })
)

const fadeConfig = baseConfigHelpers.getConfig({
  name: 'Alert',
  description: `<p>Fade can be disabled using <code>fade=false</code>.</p>`
})

// TODO: info broken due to hooks error
storiesOf('UI | Alert', module).add('Alerts without fade', () => <AlertFadeless />, fadeConfig)

storiesOf('UI | Alert', module).add('Alerts without fade (uncontrolled)', AlertUncontrolledFadeless, fadeConfig)
