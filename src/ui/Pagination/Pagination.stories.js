import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Pagination from './examples/Pagination'
import PaginationState from './examples/PaginationState'
import PaginationSizingLarge from './examples/PaginationSizingLarge'
import PaginationSizingSmall from './examples/PaginationSizingSmall'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Pagination' })
  }
}

storiesOf('UI|Pagination', module).add('Disabled and active states', Pagination, config)

storiesOf('UI|Pagination', module).add('Sizing', PaginationState, config)

storiesOf('UI|Pagination', module).add('TODO: PaginationSizingLarge', PaginationSizingLarge, config)

storiesOf('UI|Pagination', module).add('TODO: PaginationSizingSmall', PaginationSizingSmall, config)
