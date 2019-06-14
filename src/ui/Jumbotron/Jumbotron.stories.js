import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Jumbotron from './examples/Jumbotron'
import JumbotronFluid from './examples/JumbotronFluid'

const config = baseConfigHelpers.getConfig({ name: 'Jumbotron' })

storiesOf('UI | Jumbotron', module).add('Jumbotron', Jumbotron, config)

storiesOf('UI | Jumbotron', module).add('Fluid Jumbotron', JumbotronFluid, config)
