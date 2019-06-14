import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Button from './examples/Button'
import ButtonCloseIcon from './examples/ButtonCloseIcon'
import ButtonOutline from './examples/ButtonOutline'
import ButtonStateful from './examples/ButtonStateful'

const name = 'Button'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Buttons', Button, config)

storiesOf(category, module).add('Outline Buttons', ButtonOutline, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add(
  'Active State',
  () => <ButtonStateful />,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are active/select. It is not in the opinion of this library to manage state within it's components so it is left up to you. Below is a simple example showcasing how this could be done using the components which already exist in this library.</p>`
  })
)

storiesOf(category, module).add(
  'Disabled State',
  ButtonCloseIcon,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>Use a generic close icon to dismiss content. Use <code>&lt;Button close /&gt;</code> for the default icon. Otherwise, custom content for the button may be defined. (e.g. JSX: <code>&lt;Button close&gt;&lt;span aria-hidden="true"&gt;&ndash;&lt;/span&gt;&lt;/Button&gt;</code>) The default aria-label is "Close".</p>`
  })
)
