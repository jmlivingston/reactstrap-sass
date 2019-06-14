import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Badge from './examples/Example0Badge'
import Example1BadgeButton from './examples/Example1BadgeButton'
import Example2BadgePills from './examples/Example2BadgePills'
import Example3BadgeVariations from './examples/Example3BadgeVariations'
import Example4BadgeLinks from './examples/Example4BadgeLinks'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Badge' })
  }
}

storiesOf('UI|Badge', module).add('Contextual variations', Example0Badge, config)

storiesOf('UI|Badge', module).add('Pills', Example1BadgeButton, config)

storiesOf('UI|Badge', module).add('Links', Example2BadgePills, config)

storiesOf('UI|Badge', module).add('TODO: BadgeVariations', Example3BadgeVariations, config)

storiesOf('UI|Badge', module).add('TODO: BadgeLinks', Example4BadgeLinks, config)
