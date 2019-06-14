import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Badge from './examples/Badge'
import BadgeButton from './examples/BadgeButton'
import BadgePills from './examples/BadgePills'
import BadgeVariations from './examples/BadgeVariations'
import BadgeLinks from './examples/BadgeLinks'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Badge' })
  }
}

storiesOf('UI|Badge', module).add('Contextual variations', Badge, config)

storiesOf('UI|Badge', module).add('Pills', BadgeButton, config)

storiesOf('UI|Badge', module).add('Links', BadgePills, config)

storiesOf('UI|Badge', module).add('TODO: BadgeVariations', BadgeVariations, config)

storiesOf('UI|Badge', module).add('TODO: BadgeLinks', BadgeLinks, config)
