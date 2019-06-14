import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Breadcrumb from './examples/Example0Breadcrumb'
import Example1BreadcrumbNoList from './examples/Example1BreadcrumbNoList'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Breadcrumb' })
  }
}

storiesOf('UI|Breadcrumb', module).add('No list', Example0Breadcrumb, config)

storiesOf('UI|Breadcrumb', module).add('BreadcrumbNoList', Example1BreadcrumbNoList, config)
