import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Table from './examples/Table'
import TableBordered from './examples/TableBordered'
import TableBorderless from './examples/TableBorderless'
import TableDark from './examples/TableDark'
import TableHover from './examples/TableHover'
import TableResponsive from './examples/TableResponsive'
import TableSizing from './examples/TableSizing'
import TableStriped from './examples/TableStriped'

const config = baseConfigHelpers.getConfig({ name: 'Table' })

storiesOf('UI | Table', module).add('Table', Table, config)

storiesOf('UI | Table', module).add('Dark table', TableDark, config)

storiesOf('UI | Table', module).add('Striped rows', TableStriped, config)

storiesOf('UI | Table', module).add('Bordered table', TableBordered, config)

storiesOf('UI | Table', module).add('Borderless table', TableBorderless, config)

storiesOf('UI | Table', module).add('Hoverable rows', TableHover, config)

storiesOf('UI | Table', module).add('Small table', TableSizing, config)

storiesOf('UI | Table', module).add('Responsive table', TableResponsive, config)
