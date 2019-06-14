import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Table from './examples/Example0Table'
import Example1TableBordered from './examples/Example1TableBordered'
import Example2TableBorderless from './examples/Example2TableBorderless'
import Example3TableHover from './examples/Example3TableHover'
import Example4TableDark from './examples/Example4TableDark'
import Example5TableResponsive from './examples/Example5TableResponsive'
import Example6TableSizing from './examples/Example6TableSizing'
import Example7TableStriped from './examples/Example7TableStriped'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Table' })
  }
}

storiesOf('UI|Table', module).add('Dark table', Example0Table, config)

storiesOf('UI|Table', module).add('Striped rows', Example1TableBordered, config)

storiesOf('UI|Table', module).add('Bordered table', Example2TableBorderless, config)

storiesOf('UI|Table', module).add('Borderless table', Example3TableHover, config)

storiesOf('UI|Table', module).add('Hoverable rows', Example4TableDark, config)

storiesOf('UI|Table', module).add('Small table', Example5TableResponsive, config)

storiesOf('UI|Table', module).add('Responsive table', Example6TableSizing, config)

storiesOf('UI|Table', module).add('TODO: TableStriped', Example7TableStriped, config)
