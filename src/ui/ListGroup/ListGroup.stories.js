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

storiesOf('UI|ListGroup', module).add('TODO: ListGroup', ListGroup, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupBadge', ListGroupBadge, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupDisabledItems', ListGroupDisabledItems, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupAnchorsAndButtons', ListGroupAnchorsAndButtons, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupContextualClasses', ListGroupContextualClasses, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupCustomContent', ListGroupCustomContent, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupFlush', ListGroupFlush, config)
