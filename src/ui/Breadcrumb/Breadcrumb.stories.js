import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Breadcrumb from './examples/Breadcrumb'
import BreadcrumbNoList from './examples/BreadcrumbNoList'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Breadcrumb' })
  }
}

storiesOf('UI|Breadcrumb', module).add('No list', Breadcrumb, config)

storiesOf('UI|Breadcrumb', module).add('BreadcrumbNoList', BreadcrumbNoList, config)
