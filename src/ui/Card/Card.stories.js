import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
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

const config = baseConfigHelpers.getConfig({ name: 'Alert' })

storiesOf('UI|Card', module).add('Content Types', Card, config)

storiesOf('UI|Card', module).add('Sizing', CardContentTypes, config)

storiesOf('UI|Card', module).add('Text alignment', CardSizing, config)

storiesOf('UI|Card', module).add('Header and Footer', CardAlignment, config)

storiesOf('UI|Card', module).add('Image caps', CardHeaderFooter, config)

storiesOf('UI|Card', module).add('Image overlays', CardImageCaps, config)

storiesOf('UI|Card', module).add('Background variants', CardImageOverlay, config)

storiesOf('UI|Card', module).add('Outline variants', CardBackgrounds, config)

storiesOf('UI|Card', module).add('Groups', CardOutline, config)

storiesOf('UI|Card', module).add('Decks', CardGroups, config)

storiesOf('UI|Card', module).add('Columns', CardDecks, config)

storiesOf('UI|Card', module).add('CardColumns', CardColumns, config)
