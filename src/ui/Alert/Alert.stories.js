import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Alert from './examples/Example0Alert'
import Example1AlertLink from './examples/Example1AlertLink'
import Example2AlertContent from './examples/Example2AlertContent'
import Example3AlertDismiss from './examples/Example3AlertDismiss'
import Example4AlertUncontrolledDismiss from './examples/Example4AlertUncontrolledDismiss'
import Example5AlertFadeless from './examples/Example5AlertFadeless'
import Example6AlertUncontrolledFadeless from './examples/Example6AlertUncontrolledFadeless'

const alertConfig = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Alert' })
  }
}

storiesOf('Alert', module).add('Alert', Example0Alert, alertConfig)

storiesOf('Alert', module).add('Link color', Example1AlertLink, alertConfig)

storiesOf('Alert', module).add('Additional content', Example2AlertContent, alertConfig)

// TODO: info broken due to hooks error
storiesOf('Alert', module).add('Dismissing', () => <Example3AlertDismiss />, alertConfig)

storiesOf('Alert', module).add('Uncontrolled [disable] Alerts', Example4AlertUncontrolledDismiss, alertConfig)

// TODO: info broken due to hooks error
storiesOf('Alert', module).add('Alerts without fade', () => <Example5AlertFadeless />, alertConfig)

storiesOf('Alert', module).add('Alerts without fade (uncontrolled)', Example6AlertUncontrolledFadeless, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'UncontrolledAlert' })
  }
})
