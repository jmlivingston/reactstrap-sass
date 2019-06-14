import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Jumbotron from './examples/Jumbotron'
import JumbotronFluid from './examples/JumbotronFluid'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Jumbotron' })
  }
}

storiesOf('UI|Jumbotron', module).add('Fluid Jumbotron', Jumbotron, config)

storiesOf('UI|Jumbotron', module).add('TODO: JumbotronFluid', JumbotronFluid, config)
