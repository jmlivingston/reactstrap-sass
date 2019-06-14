import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Card from './examples/Example0Card'
import Example10CardDecks from './examples/Example10CardDecks'
import Example11CardColumns from './examples/Example11CardColumns'
import Example1CardContentTypes from './examples/Example1CardContentTypes'
import Example2CardSizing from './examples/Example2CardSizing'
import Example3CardAlignment from './examples/Example3CardAlignment'
import Example4CardHeaderFooter from './examples/Example4CardHeaderFooter'
import Example5CardImageCaps from './examples/Example5CardImageCaps'
import Example6CardImageOverlay from './examples/Example6CardImageOverlay'
import Example7CardBackgrounds from './examples/Example7CardBackgrounds'
import Example8CardOutline from './examples/Example8CardOutline'
import Example9CardGroups from './examples/Example9CardGroups'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Card' })
  }
}

storiesOf('UI|Card', module).add('Content Types', Example0Card, config)

storiesOf('UI|Card', module).add('Sizing', Example1CardContentTypes, config)

storiesOf('UI|Card', module).add('Text alignment', Example2CardSizing, config)

storiesOf('UI|Card', module).add('Header and Footer', Example3CardAlignment, config)

storiesOf('UI|Card', module).add('Image caps', Example4CardHeaderFooter, config)

storiesOf('UI|Card', module).add('Image overlays', Example5CardImageCaps, config)

storiesOf('UI|Card', module).add('Background variants', Example6CardImageOverlay, config)

storiesOf('UI|Card', module).add('Outline variants', Example7CardBackgrounds, config)

storiesOf('UI|Card', module).add('Groups', Example8CardOutline, config)

storiesOf('UI|Card', module).add('Decks', Example9CardGroups, config)

storiesOf('UI|Card', module).add('Columns', Example10CardDecks, config)

storiesOf('UI|Card', module).add('CardColumns', Example11CardColumns, config)
