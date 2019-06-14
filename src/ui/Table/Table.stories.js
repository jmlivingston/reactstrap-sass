import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Table from './examples/Table'
import TableBordered from './examples/TableBordered'
import TableBorderless from './examples/TableBorderless'
import TableHover from './examples/TableHover'
import TableDark from './examples/TableDark'
import TableResponsive from './examples/TableResponsive'
import TableSizing from './examples/TableSizing'
import TableStriped from './examples/TableStriped'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Table' })
  }
}

storiesOf('UI|Table', module).add('Dark table', Table, config)

storiesOf('UI|Table', module).add('Striped rows', TableBordered, config)

storiesOf('UI|Table', module).add('Bordered table', TableBorderless, config)

storiesOf('UI|Table', module).add('Borderless table', TableHover, config)

storiesOf('UI|Table', module).add('Hoverable rows', TableDark, config)

storiesOf('UI|Table', module).add('Small table', TableResponsive, config)

storiesOf('UI|Table', module).add('Responsive table', TableSizing, config)

storiesOf('UI|Table', module).add('TODO: TableStriped', TableStriped, config)
