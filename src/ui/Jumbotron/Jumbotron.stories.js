import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Jumbotron from './examples/Example0Jumbotron'
import Example1JumbotronFluid from './examples/Example1JumbotronFluid'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Jumbotron' })
  }
}

storiesOf('UI|Jumbotron', module).add('Fluid Jumbotron', Example0Jumbotron, config)

storiesOf('UI|Jumbotron', module).add('TODO: JumbotronFluid', Example1JumbotronFluid, config)
