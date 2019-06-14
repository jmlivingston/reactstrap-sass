import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Badge from './examples/Badge'
import BadgeButton from './examples/BadgeButton'
import BadgeLinks from './examples/BadgeLinks'
import BadgePills from './examples/BadgePills'
import BadgeVariations from './examples/BadgeVariations'

const config = baseConfigHelpers.getConfig({ name: 'Badge' })

const badgeConfig = baseConfigHelpers.getConfig({
  name: 'Badge',
  description: `<p>Scale to parent</p>`
})

storiesOf('UI|Badge', module).add('Badges', Badge, badgeConfig)

const badgeButtonConfig = baseConfigHelpers.getConfig({
  name: 'Badge',
  description: `<p>Badges can be used as part of links or buttons to provide a counter.</p>`
})

storiesOf('UI|Badge', module).add('Badge Buttons', BadgeButton, badgeButtonConfig)

storiesOf('UI|Badge', module).add('Contextual Variations', BadgeVariations, config)

storiesOf('UI|Badge', module).add('Pills', BadgePills, config)

const badgeLinksConfig = baseConfigHelpers.getConfig({
  name: 'Badge',
  description: `<p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>`
})

storiesOf('UI|Badge', module).add('Links', BadgeLinks, badgeLinksConfig)
