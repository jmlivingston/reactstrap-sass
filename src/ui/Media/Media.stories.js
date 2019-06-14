import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Media from './examples/Media'
import MediaAlignment from './examples/MediaAlignment'
import MediaList from './examples/MediaList'
import MediaNested from './examples/MediaNested'

const config = storyConfigHelpers.getConfig({ name: 'Media' })

storiesOf(`${storyConfig.componentPrefix}Media`, module).add('Media object', Media, config)

storiesOf(`${storyConfig.componentPrefix}Media`, module).add('Nesting', MediaNested, config)

storiesOf(`${storyConfig.componentPrefix}Media`, module).add('Alignment', MediaAlignment, config)

storiesOf(`${storyConfig.componentPrefix}Media`, module).add('Media list', MediaList, config)
