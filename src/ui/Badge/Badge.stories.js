import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Badge from './examples/Badge'
import BadgeButton from './examples/BadgeButton'
import BadgeLinks from './examples/BadgeLinks'
import BadgePills from './examples/BadgePills'
import BadgeVariations from './examples/BadgeVariations'

const config = storyConfigHelpers.getConfig({ name: 'Badge' })

const badgeConfig = storyConfigHelpers.getConfig({
  name: 'Badge',
  description: `<p>Scale to parent</p>`
})

storiesOf(`${storyConfig.componentPrefix}Badge`, module).add('Badges', Badge, badgeConfig)

const badgeButtonConfig = storyConfigHelpers.getConfig({
  name: 'Badge',
  description: `<p>Badges can be used as part of links or buttons to provide a counter.</p>`
})

storiesOf(`${storyConfig.componentPrefix}Badge`, module).add('Badge Buttons', BadgeButton, badgeButtonConfig)

storiesOf(`${storyConfig.componentPrefix}Badge`, module).add('Contextual Variations', BadgeVariations, config)

storiesOf(`${storyConfig.componentPrefix}Badge`, module).add('Pills', BadgePills, config)

const badgeLinksConfig = storyConfigHelpers.getConfig({
  name: 'Badge',
  description: `<p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>`
})

storiesOf(`${storyConfig.componentPrefix}Badge`, module).add('Links', BadgeLinks, badgeLinksConfig)
