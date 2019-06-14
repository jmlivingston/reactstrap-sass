import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Table from './examples/Table'
import TableBordered from './examples/TableBordered'
import TableBorderless from './examples/TableBorderless'
import TableDark from './examples/TableDark'
import TableHover from './examples/TableHover'
import TableResponsive from './examples/TableResponsive'
import TableSizing from './examples/TableSizing'
import TableStriped from './examples/TableStriped'

const config = storyConfigHelpers.getConfig({ name: 'Table' })

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Table', Table, config)

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Dark table', TableDark, config)

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Striped rows', TableStriped, config)

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Bordered table', TableBordered, config)

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Borderless table', TableBorderless, config)

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Hoverable rows', TableHover, config)

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Small table', TableSizing, config)

storiesOf(`${storyConfig.componentPrefix}Table`, module).add('Responsive table', TableResponsive, config)
