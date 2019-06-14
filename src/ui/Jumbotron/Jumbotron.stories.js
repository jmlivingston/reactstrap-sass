import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Jumbotron from './examples/Jumbotron'
import JumbotronFluid from './examples/JumbotronFluid'

const config = storyConfigHelpers.getConfig({ name: 'Jumbotron' })

storiesOf(`${storyConfig.componentPrefix}Jumbotron`, module).add('Jumbotron', Jumbotron, config)

storiesOf(`${storyConfig.componentPrefix}Jumbotron`, module).add('Fluid Jumbotron', JumbotronFluid, config)
