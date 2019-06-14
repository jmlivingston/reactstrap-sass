import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Breadcrumb from './examples/Example0Breadcrumb'
import Example1BreadcrumbNoList from './examples/Example1BreadcrumbNoList'

storiesOf('Breadcrumb', module).add('No list', Example0Breadcrumb, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Breadcrumb' })
  }
})
storiesOf('Breadcrumb', module).add('TODO: BreadcrumbNoList', Example1BreadcrumbNoList, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Breadcrumb' })
  }
})
