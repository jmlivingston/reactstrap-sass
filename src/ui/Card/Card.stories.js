import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Card from './examples/Card'
import CardDecks from './examples/CardDecks'
import CardColumns from './examples/CardColumns'
import CardContentTypes from './examples/CardContentTypes'
import CardSizing from './examples/CardSizing'
import CardAlignment from './examples/CardAlignment'
import CardHeaderFooter from './examples/CardHeaderFooter'
import CardImageCaps from './examples/CardImageCaps'
import CardImageOverlay from './examples/CardImageOverlay'
import CardBackgrounds from './examples/CardBackgrounds'
import CardOutline from './examples/CardOutline'
import CardGroups from './examples/CardGroups'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Card' })
  }
}

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
