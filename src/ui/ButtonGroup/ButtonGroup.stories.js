import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0ButtonGroup from './examples/Example0ButtonGroup'
import Example1ButtonToolbar from './examples/Example1ButtonToolbar'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'ButtonGroup' })
  }
}

storiesOf('UI|ButtonGroup', module).add('Button Toolbar', Example0ButtonGroup, config)

storiesOf('UI|ButtonGroup', module).add('Sizing', Example1ButtonToolbar, config)
