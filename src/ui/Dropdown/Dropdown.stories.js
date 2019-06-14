import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import CustomDropdown from './examples/CustomDropdown'
import Dropdown from './examples/Dropdown'
import DropdownSetActiveFromChild from './examples/DropdownSetActiveFromChild'
import DropdownSizing from './examples/DropdownSizing'
import DropdownUncontrolled from './examples/DropdownUncontrolled'

const name = 'Dropdown'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

// TODO: info broken due to hooks error
storiesOf(category, module).add(
  'Dropdowns',
  () => <Dropdown />,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>The <code>Dropdown</code> component is used to pass the <code>isOpen</code> &amp; <code>toggle</code> props via context to the following components: <code>DropdownToggle</code>, <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses the <code>Button</code> component internally, meaning it also accepts all the props the <Link to="/components/buttons/">Button component</Link> accepts.</p>`
  })
)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Menu Headers', () => <DropdownSizing />, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add('Menu Dividers', () => <CustomDropdown />, config)

storiesOf(category, module).add(
  'Menu Items',
  DropdownUncontrolled,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledDropdown</code> does not require <code>isOpen</code> nor <code>toggle</code> props to work. For the <code>ButtonDropdown</code> flavor, an uncontrolled component have been made as well; <code>UncontrolledButtonDropdown</code>.</p>`
  })
)

storiesOf(category, module).add('Disabled Menu Items', DropdownSetActiveFromChild, config)
