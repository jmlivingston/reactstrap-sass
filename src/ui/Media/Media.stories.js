import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Media from './examples/Example0Media'
import Example1MediaNested from './examples/Example1MediaNested'
import Example2MediaAlignment from './examples/Example2MediaAlignment'
import Example3MediaList from './examples/Example3MediaList'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Media' })
  }
}
storiesOf('UI|Media', module).add('TODO: Media', Example0Media, config)

storiesOf('UI|Media', module).add('TODO: MediaNested', Example1MediaNested, config)

storiesOf('UI|Media', module).add('TODO: MediaAlignment', Example2MediaAlignment, config)

storiesOf('UI|Media', module).add('TODO: MediaList', Example3MediaList, config)
