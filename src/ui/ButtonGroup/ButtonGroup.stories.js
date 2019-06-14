import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import ButtonGroup from './examples/ButtonGroup'
import ButtonToolbar from './examples/ButtonToolbar'

const config = baseConfigHelpers.getConfig({ name: 'ButtonGroup' })

storiesOf('UI|ButtonGroup', module).add('Button Toolbar', ButtonGroup, config)

storiesOf('UI|ButtonGroup', module).add('Sizing', ButtonToolbar, config)
