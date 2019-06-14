import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Card from './examples/Card'
import CardAlignment from './examples/CardAlignment'
import CardBackgrounds from './examples/CardBackgrounds'
import CardColumns from './examples/CardColumns'
import CardContentTypes from './examples/CardContentTypes'
import CardDecks from './examples/CardDecks'
import CardGroups from './examples/CardGroups'
import CardHeaderFooter from './examples/CardHeaderFooter'
import CardImageCaps from './examples/CardImageCaps'
import CardImageOverlay from './examples/CardImageOverlay'
import CardOutline from './examples/CardOutline'
import CardSizing from './examples/CardSizing'

const name = 'ButtonDropdown'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Content Types', Card, config)

storiesOf(category, module).add('Sizing', CardContentTypes, config)

storiesOf(category, module).add('Text alignment', CardSizing, config)

storiesOf(category, module).add('Header and Footer', CardAlignment, config)

storiesOf(category, module).add('Image caps', CardHeaderFooter, config)

storiesOf(category, module).add('Image overlays', CardImageCaps, config)

storiesOf(category, module).add('Background variants', CardImageOverlay, config)

storiesOf(category, module).add('Outline variants', CardBackgrounds, config)

storiesOf(category, module).add('Groups', CardOutline, config)

storiesOf(category, module).add('Decks', CardGroups, config)

storiesOf(category, module).add('Columns', CardDecks, config)

storiesOf(category, module).add('CardColumns', CardColumns, config)
