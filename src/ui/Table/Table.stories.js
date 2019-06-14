import { storiesOf } from '@storybook/react'
import { storyConfigHelpers } from '../../../.storybook/storyConfig'
import Table from './examples/Table'
import TableBordered from './examples/TableBordered'
import TableBorderless from './examples/TableBorderless'
import TableDark from './examples/TableDark'
import TableHover from './examples/TableHover'
import TableResponsive from './examples/TableResponsive'
import TableSizing from './examples/TableSizing'
import TableStriped from './examples/TableStriped'

const name = 'Table'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Table', Table, config)

storiesOf(category, module).add('Dark table', TableDark, config)

storiesOf(category, module).add('Striped rows', TableStriped, config)

storiesOf(category, module).add('Bordered table', TableBordered, config)

storiesOf(category, module).add('Borderless table', TableBorderless, config)

storiesOf(category, module).add('Hoverable rows', TableHover, config)

storiesOf(category, module).add('Small table', TableSizing, config)

storiesOf(category, module).add('Responsive table', TableResponsive, config)
