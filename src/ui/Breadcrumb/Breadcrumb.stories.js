import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Breadcrumb from './examples/Breadcrumb'
import BreadcrumbNoList from './examples/BreadcrumbNoList'

const name = 'Breadcrumb'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Breadcrumbs', Breadcrumb, config)

const breadcrumbNoListConfig = storyConfigHelpers.getConfig({
  name,
  description: '<p>Breadcrumbs can work without the usage of list markup.</p>'
})

storiesOf(category, module).add('No list', BreadcrumbNoList, breadcrumbNoListConfig)
