import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import ButtonGroup from './examples/ButtonGroup'
import ButtonToolbar from './examples/ButtonToolbar'

const config = storyConfigHelpers.getConfig({ name: 'ButtonGroup' })

storiesOf(`${storyConfig.componentPrefix}ButtonGroup`, module).add('Button Toolbar', ButtonGroup, config)

storiesOf(`${storyConfig.componentPrefix}ButtonGroup`, module).add('Sizing', ButtonToolbar, config)
