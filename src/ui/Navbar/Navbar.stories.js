import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Navbar from './examples/Navbar'
import NavbarToggler from './examples/NavbarToggler'

const config = storyConfigHelpers.getConfig({ name: 'Navbar' })

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Navbar`, module).add('Navbar', () => <Navbar />, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Navbar`, module).add('NavbarToggler', () => <NavbarToggler />, config)
