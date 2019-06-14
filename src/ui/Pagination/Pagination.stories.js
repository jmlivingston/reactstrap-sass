import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Pagination from './examples/Pagination'
import PaginationSizingLarge from './examples/PaginationSizingLarge'
import PaginationSizingSmall from './examples/PaginationSizingSmall'
import PaginationState from './examples/PaginationState'

const config = baseConfigHelpers.getConfig({ name: 'Pagination' })

storiesOf('UI|Pagination', module).add('Disabled and active states', Pagination, config)

storiesOf('UI|Pagination', module).add('Sizing', PaginationState, config)

storiesOf('UI|Pagination', module).add('TODO: PaginationSizingLarge', PaginationSizingLarge, config)

storiesOf('UI|Pagination', module).add('TODO: PaginationSizingSmall', PaginationSizingSmall, config)
