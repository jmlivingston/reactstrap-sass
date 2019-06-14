import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Breadcrumb from './examples/Breadcrumb'
import BreadcrumbNoList from './examples/BreadcrumbNoList'

const config = storyConfigHelpers.getConfig({ name: 'Breadcrumb' })

storiesOf(`${storyConfig.componentPrefix}Breadcrumb`, module).add('Breadcrumbs', Breadcrumb, config)

const breadcrumbNoListConfig = storyConfigHelpers.getConfig({
  name: 'Breadcrumb',
  description: '<p>Breadcrumbs can work without the usage of list markup.</p>'
})

storiesOf(`${storyConfig.componentPrefix}Breadcrumb`, module).add('No list', BreadcrumbNoList, breadcrumbNoListConfig)
