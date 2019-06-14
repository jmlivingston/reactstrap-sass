import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Spinner from './examples/Spinner'
import SpinnerGrower from './examples/SpinnerGrower'

const config = baseConfigHelpers.getConfig({ name: 'Spinner' })

storiesOf('UI|Spinner', module).add('Growing Spinner', Spinner, config)

storiesOf('UI|Spinner', module).add('Sizes', SpinnerGrower, config)
