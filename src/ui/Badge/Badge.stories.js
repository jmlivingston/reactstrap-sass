import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Badge from './examples/Badge'
import BadgeButton from './examples/BadgeButton'
import BadgeLinks from './examples/BadgeLinks'
import BadgePills from './examples/BadgePills'
import BadgeVariations from './examples/BadgeVariations'

const name = 'Badge'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

const badgeConfig = storyConfigHelpers.getConfig({
  name,
  description: `<p>Scale to parent</p>`
})

storiesOf(category, module).add('Badges', Badge, badgeConfig)

const badgeButtonConfig = storyConfigHelpers.getConfig({
  name,
  description: `<p>Badges can be used as part of links or buttons to provide a counter.</p>`
})

storiesOf(category, module).add('Badge Buttons', BadgeButton, badgeButtonConfig)

storiesOf(category, module).add('Contextual Variations', BadgeVariations, config)

storiesOf(category, module).add('Pills', BadgePills, config)

const badgeLinksConfig = storyConfigHelpers.getConfig({
  name,
  description: `<p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>`
})

storiesOf(category, module).add('Links', BadgeLinks, badgeLinksConfig)
