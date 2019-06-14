import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Media from './examples/Media'
import MediaAlignment from './examples/MediaAlignment'
import MediaList from './examples/MediaList'
import MediaNested from './examples/MediaNested'

const name = 'Media'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Media object', Media, config)

storiesOf(category, module).add('Nesting', MediaNested, config)

storiesOf(category, module).add('Alignment', MediaAlignment, config)

storiesOf(category, module).add('Media list', MediaList, config)
