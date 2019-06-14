import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Pagination from './examples/Pagination'
import PaginationSizingLarge from './examples/PaginationSizingLarge'
import PaginationSizingSmall from './examples/PaginationSizingSmall'
import PaginationState from './examples/PaginationState'

const name = 'Pagination'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Pagination', Pagination, config)

storiesOf(category, module).add('Disabled and active states', PaginationState, config)

storiesOf(category, module).add('Sizing Large', PaginationSizingLarge, config)

storiesOf(category, module).add('Sizing Small', PaginationSizingSmall, config)
