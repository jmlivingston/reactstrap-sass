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

const config = storyConfigHelpers.getConfig({ name: 'Alert' })

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Content Types', Card, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Sizing', CardContentTypes, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Text alignment', CardSizing, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Header and Footer', CardAlignment, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Image caps', CardHeaderFooter, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Image overlays', CardImageCaps, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Background variants', CardImageOverlay, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Outline variants', CardBackgrounds, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Groups', CardOutline, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Decks', CardGroups, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('Columns', CardDecks, config)

storiesOf(`${storyConfig.componentPrefix}Card`, module).add('CardColumns', CardColumns, config)
