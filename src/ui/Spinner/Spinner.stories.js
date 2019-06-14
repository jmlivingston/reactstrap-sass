import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Spinner from './examples/Spinner'
import SpinnerGrower from './examples/SpinnerGrower'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Spinner' })
  }
}

storiesOf('UI|Spinner', module).add('Growing Spinner', Spinner, config)

storiesOf('UI|Spinner', module).add('Sizes', SpinnerGrower, config)
