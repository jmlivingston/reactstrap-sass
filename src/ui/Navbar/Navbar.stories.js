import { storiesOf } from '@storybook/react';
import React from 'react';
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig';
import Navbar from './examples/Navbar';
import NavbarToggler from './examples/NavbarToggler';

const name = 'Navbar'
const category = `${storyConfig.componentPrefix}${name}`

// TODO: info broken due to hooks error
storiesOf(category, module).add(
  'Navbar',
  () => <Navbar />,
  storyConfigHelpers.getConfig({
    name: 'Navbar',
    description: `<p>Properties: See also Nav for additional components and PropTypes.</p>`
  })
)

// TODO: info broken due to hooks error
storiesOf(category, module).add(
  'NavbarToggler',
  () => <NavbarToggler />,
  storyConfigHelpers.getConfig({
    name: 'Navbar',
    description: `<p>Place the <code>NavbarToggler</code> <b>after</b> <code>NavbarBrand</code> to have it appear on the right (typical setup). Reverse the order to have it appear on the left </p>`
  })
)
