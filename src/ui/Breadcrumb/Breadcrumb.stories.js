import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Breadcrumb from './examples/Breadcrumb'
import BreadcrumbNoList from './examples/BreadcrumbNoList'

const config = baseConfigHelpers.getConfig({ name: 'Breadcrumb' })

storiesOf('UI | Breadcrumb', module).add('Breadcrumbs', Breadcrumb, config)

const breadcrumbNoListConfig = baseConfigHelpers.getConfig({
  name: 'Breadcrumb',
  description: '<p>Breadcrumbs can work without the usage of list markup.</p>'
})

storiesOf('UI | Breadcrumb', module).add('No list', BreadcrumbNoList, breadcrumbNoListConfig)
