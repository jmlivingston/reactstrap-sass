import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Media from './examples/Media'
import MediaAlignment from './examples/MediaAlignment'
import MediaList from './examples/MediaList'
import MediaNested from './examples/MediaNested'

const config = baseConfigHelpers.getConfig({ name: 'Media' })

storiesOf('UI | Media', module).add('Media object', Media, config)

storiesOf('UI | Media', module).add('Nesting', MediaNested, config)

storiesOf('UI | Media', module).add('Alignment', MediaAlignment, config)

storiesOf('UI | Media', module).add('Media list', MediaList, config)
