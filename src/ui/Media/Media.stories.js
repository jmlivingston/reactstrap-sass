import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Media from './examples/Media'
import MediaAlignment from './examples/MediaAlignment'
import MediaList from './examples/MediaList'
import MediaNested from './examples/MediaNested'

const config = baseConfigHelpers.getConfig({ name: 'Media' })

storiesOf('UI|Media', module).add('TODO: Media', Media, config)

storiesOf('UI|Media', module).add('TODO: MediaNested', MediaNested, config)

storiesOf('UI|Media', module).add('TODO: MediaAlignment', MediaAlignment, config)

storiesOf('UI|Media', module).add('TODO: MediaList', MediaList, config)
