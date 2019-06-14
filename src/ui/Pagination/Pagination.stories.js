import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Pagination from './examples/Pagination'
import PaginationSizingLarge from './examples/PaginationSizingLarge'
import PaginationSizingSmall from './examples/PaginationSizingSmall'
import PaginationState from './examples/PaginationState'

const config = storyConfigHelpers.getConfig({ name: 'Pagination' })

storiesOf(`${storyConfig.componentPrefix}Pagination`, module).add('Pagination', Pagination, config)

storiesOf(`${storyConfig.componentPrefix}Pagination`, module).add('Disabled and active states', PaginationState, config)

storiesOf(`${storyConfig.componentPrefix}Pagination`, module).add('Sizing Large', PaginationSizingLarge, config)

storiesOf(`${storyConfig.componentPrefix}Pagination`, module).add('Sizing Small', PaginationSizingSmall, config)
