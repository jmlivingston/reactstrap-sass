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

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Alert' })
  }
}

storiesOf('UI|Alert', module).add('Alert', Example0Alert, config)

storiesOf('UI|Alert', module).add('Link color', Example1AlertLink, config)

storiesOf('UI|Alert', module).add('Additional content', Example2AlertContent, config)

// TODO: info broken due to hooks error
storiesOf('UI|Alert', module).add('Dismissing', () => <Example3AlertDismiss />, config)

storiesOf('UI|Alert', module).add('Uncontrolled [disable] Alerts', Example4AlertUncontrolledDismiss, config)

// TODO: info broken due to hooks error
storiesOf('UI|Alert', module).add('Alerts without fade', () => <Example5AlertFadeless />, config)

storiesOf('UI|Alert', module).add('Alerts without fade (uncontrolled)', Example6AlertUncontrolledFadeless, config)
