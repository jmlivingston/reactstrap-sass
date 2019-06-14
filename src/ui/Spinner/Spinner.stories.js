import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Spinner from './examples/Spinner'
import SpinnerGrower from './examples/SpinnerGrower'

const name = 'Spinner'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Spinner', Spinner, config)

storiesOf(category, module).add('Growing Spinner', SpinnerGrower, config)
