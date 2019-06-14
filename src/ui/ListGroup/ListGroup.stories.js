import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0ListGroup from './examples/Example0ListGroup'
import Example1ListGroupBadge from './examples/Example1ListGroupBadge'
import Example2ListGroupDisabledItems from './examples/Example2ListGroupDisabledItems'
import Example3ListGroupAnchorsAndButtons from './examples/Example3ListGroupAnchorsAndButtons'
import Example4ListGroupContextualClasses from './examples/Example4ListGroupContextualClasses'
import Example5ListGroupCustomContent from './examples/Example5ListGroupCustomContent'
import Example6ListGroupFlush from './examples/Example6ListGroupFlush'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'ListGroup' })
  }
}

storiesOf('UI|ListGroup', module).add('TODO: ListGroup', Example0ListGroup, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupBadge', Example1ListGroupBadge, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupDisabledItems', Example2ListGroupDisabledItems, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupAnchorsAndButtons', Example3ListGroupAnchorsAndButtons, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupContextualClasses', Example4ListGroupContextualClasses, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupCustomContent', Example5ListGroupCustomContent, config)

storiesOf('UI|ListGroup', module).add('TODO: ListGroupFlush', Example6ListGroupFlush, config)
