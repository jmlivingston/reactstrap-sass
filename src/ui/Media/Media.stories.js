import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Media from './examples/Media'
import MediaNested from './examples/MediaNested'
import MediaAlignment from './examples/MediaAlignment'
import MediaList from './examples/MediaList'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Media' })
  }
}
storiesOf('UI|Media', module).add('TODO: Media', Media, config)

storiesOf('UI|Media', module).add('TODO: MediaNested', MediaNested, config)

storiesOf('UI|Media', module).add('TODO: MediaAlignment', MediaAlignment, config)

storiesOf('UI|Media', module).add('TODO: MediaList', MediaList, config)
