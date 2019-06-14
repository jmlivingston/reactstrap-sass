import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import ButtonGroup from './examples/ButtonGroup'
import ButtonToolbar from './examples/ButtonToolbar'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'ButtonGroup' })
  }
}

storiesOf('UI|ButtonGroup', module).add('Button Toolbar', ButtonGroup, config)

storiesOf('UI|ButtonGroup', module).add('Sizing', ButtonToolbar, config)
