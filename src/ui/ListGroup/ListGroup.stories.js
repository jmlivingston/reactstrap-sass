import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import ListGroup from './examples/ListGroup'
import ListGroupAnchorsAndButtons from './examples/ListGroupAnchorsAndButtons'
import ListGroupBadge from './examples/ListGroupBadge'
import ListGroupContextualClasses from './examples/ListGroupContextualClasses'
import ListGroupCustomContent from './examples/ListGroupCustomContent'
import ListGroupDisabledItems from './examples/ListGroupDisabledItems'
import ListGroupFlush from './examples/ListGroupFlush'

const config = storyConfigHelpers.getConfig({ name: 'ListGroup' })

storiesOf(`${storyConfig.componentPrefix}ListGroup`, module).add('ListGroup', ListGroup, config)

storiesOf(`${storyConfig.componentPrefix}ListGroup`, module).add('Tags', ListGroupBadge, config)

storiesOf(`${storyConfig.componentPrefix}ListGroup`, module).add('Disabled items', ListGroupDisabledItems, config)

storiesOf(`${storyConfig.componentPrefix}ListGroup`, module).add(
  'Anchors and buttons',
  ListGroupAnchorsAndButtons,
  config
)

storiesOf(`${storyConfig.componentPrefix}ListGroup`, module).add(
  'Contextual classes',
  ListGroupContextualClasses,
  config
)

storiesOf(`${storyConfig.componentPrefix}ListGroup`, module).add('Custom content', ListGroupCustomContent, config)

storiesOf(`${storyConfig.componentPrefix}ListGroup`, module).add('Flush', ListGroupFlush, config)
