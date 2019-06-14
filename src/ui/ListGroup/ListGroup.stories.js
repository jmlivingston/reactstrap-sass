import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import ListGroup from './examples/ListGroup'
import ListGroupAnchorsAndButtons from './examples/ListGroupAnchorsAndButtons'
import ListGroupBadge from './examples/ListGroupBadge'
import ListGroupContextualClasses from './examples/ListGroupContextualClasses'
import ListGroupCustomContent from './examples/ListGroupCustomContent'
import ListGroupDisabledItems from './examples/ListGroupDisabledItems'
import ListGroupFlush from './examples/ListGroupFlush'

const name = 'ListGroup'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('ListGroup', ListGroup, config)

storiesOf(category, module).add('Tags', ListGroupBadge, config)

storiesOf(category, module).add('Disabled items', ListGroupDisabledItems, config)

storiesOf(category, module).add(
  'Anchors and buttons',
  ListGroupAnchorsAndButtons,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>Note: you need add action props to make these buttons fit the list.</p>`
  })
)

storiesOf(category, module).add('Contextual classes', ListGroupContextualClasses, config)

storiesOf(category, module).add('Custom content', ListGroupCustomContent, config)

storiesOf(category, module).add('Flush', ListGroupFlush, config)
