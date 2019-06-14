import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Navbar from './examples/Navbar'
import NavbarToggler from './examples/NavbarToggler'

const config = baseConfigHelpers.getConfig({ name: 'Navbar' })

// TODO: info broken due to hooks error
storiesOf('UI|Navbar', module).add('NavbarToggler', () => <Navbar />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Navbar', module).add('TODO: NavbarToggler', () => <NavbarToggler />, config)
