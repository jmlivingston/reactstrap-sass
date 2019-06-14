import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Jumbotron from './examples/Jumbotron'
import JumbotronFluid from './examples/JumbotronFluid'

const name = 'Jumbotron'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Jumbotron', Jumbotron, config)

storiesOf(category, module).add('Fluid Jumbotron', JumbotronFluid, config)
