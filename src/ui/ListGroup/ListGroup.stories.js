import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import ListGroup from './examples/ListGroup'
import ListGroupAnchorsAndButtons from './examples/ListGroupAnchorsAndButtons'
import ListGroupBadge from './examples/ListGroupBadge'
import ListGroupContextualClasses from './examples/ListGroupContextualClasses'
import ListGroupCustomContent from './examples/ListGroupCustomContent'
import ListGroupDisabledItems from './examples/ListGroupDisabledItems'
import ListGroupFlush from './examples/ListGroupFlush'

const config = baseConfigHelpers.getConfig({ name: 'ListGroup' })

storiesOf('UI|ListGroup', module).add('ListGroup', ListGroup, config)

storiesOf('UI|ListGroup', module).add('Tags', ListGroupBadge, config)

storiesOf('UI|ListGroup', module).add('Disabled items', ListGroupDisabledItems, config)

storiesOf('UI|ListGroup', module).add('Anchors and buttons', ListGroupAnchorsAndButtons, config)

storiesOf('UI|ListGroup', module).add('Contextual classes', ListGroupContextualClasses, config)

storiesOf('UI|ListGroup', module).add('Custom content', ListGroupCustomContent, config)

storiesOf('UI|ListGroup', module).add('Flush', ListGroupFlush, config)
