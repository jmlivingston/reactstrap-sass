import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Spinner from './examples/Example0Spinner'
import Example1SpinnerGrower from './examples/Example1SpinnerGrower'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Spinner' })
  }
}

storiesOf('UI|Spinner', module).add('Growing Spinner', Example0Spinner, config)

storiesOf('UI|Spinner', module).add('Sizes', Example1SpinnerGrower, config)
