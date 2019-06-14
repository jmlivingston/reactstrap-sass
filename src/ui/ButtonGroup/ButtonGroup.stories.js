import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import ButtonGroup from './examples/ButtonGroup'
import ButtonToolbar from './examples/ButtonToolbar'

const name = 'ButtonGroup'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Button Toolbar', ButtonGroup, config)

storiesOf(category, module).add('Sizing', ButtonToolbar, config)
