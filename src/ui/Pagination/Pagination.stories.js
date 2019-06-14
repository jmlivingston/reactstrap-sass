import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Pagination from './examples/Example0Pagination'
import Example1PaginationState from './examples/Example1PaginationState'
import Example2PaginationSizingLarge from './examples/Example2PaginationSizingLarge'
import Example3PaginationSizingSmall from './examples/Example3PaginationSizingSmall'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Pagination' })
  }
}

storiesOf('UI|Pagination', module).add('Disabled and active states', Example0Pagination, config)

storiesOf('UI|Pagination', module).add('Sizing', Example1PaginationState, config)

storiesOf('UI|Pagination', module).add('TODO: PaginationSizingLarge', Example2PaginationSizingLarge, config)

storiesOf('UI|Pagination', module).add('TODO: PaginationSizingSmall', Example3PaginationSizingSmall, config)
