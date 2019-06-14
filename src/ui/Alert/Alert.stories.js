import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Alert from './examples/Alert'
import AlertContent from './examples/AlertContent'
import AlertDismiss from './examples/AlertDismiss'
import AlertFadeless from './examples/AlertFadeless'
import AlertLink from './examples/AlertLink'
import AlertUncontrolledDismiss from './examples/AlertUncontrolledDismiss'
import AlertUncontrolledFadeless from './examples/AlertUncontrolledFadeless'

const name = 'Alert'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Alerts', Alert, config)

storiesOf(category, module).add('Link color', AlertLink, config)

storiesOf(category, module).add('Additional content', AlertContent, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Dismissing', () => <AlertDismiss />, config)

storiesOf(category, module).add(
  'Uncontrolled [disable] Alerts',
  AlertUncontrolledDismiss,
  storyConfigHelpers.getConfig({
    name: 'UncontrolledAlert',
    description: `<p>For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledAlert</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work.</p>`
  })
)

const fadeConfig = storyConfigHelpers.getConfig({
  name,
  description: `<p>Fade can be disabled using <code>fade=false</code>.</p>`
})

// TODO: info broken due to hooks error
storiesOf(category, module).add('Alerts without fade', () => <AlertFadeless />, fadeConfig)

storiesOf(category, module).add('Alerts without fade (uncontrolled)', AlertUncontrolledFadeless, fadeConfig)
