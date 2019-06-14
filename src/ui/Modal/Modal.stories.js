import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Modal from './examples/Modal'
import ModalBackdrop from './examples/ModalBackdrop'
import ModalCustomCloseButton from './examples/ModalCustomCloseButton'
import ModalCustomCloseIcon from './examples/ModalCustomCloseIcon'
import ModalCustomTimeout from './examples/ModalCustomTimeout'
import ModalDestructuring from './examples/ModalDestructuring'
import ModalExternal from './examples/ModalExternal'
import ModalFadeless from './examples/ModalFadeless'
import ModalFocusAfterClose from './examples/ModalFocusAfterClose'
import ModalNested from './examples/ModalNested'

const name = 'Modal'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

// info broken due to hooks error
storiesOf(category, module).add('Modal', () => <Modal />, config)

// info broken due to hooks error
storiesOf(category, module).add('Backdrop', () => <ModalBackdrop />, config)

// info broken due to hooks error
storiesOf(category, module).add('Nested Modals', () => <ModalNested />, config)

// info broken due to hooks error
storiesOf(category, module).add('Modals with Custom Transition Timeouts', () => <ModalCustomTimeout />, config)

// info broken due to hooks error
storiesOf(category, module).add('Modals without Fade Effect', () => <ModalFadeless />, config)

// info broken due to hooks error
storiesOf(category, module).add('Modals with external button', () => <ModalExternal />, config)

// info broken due to hooks error
storiesOf(category, module).add('Modals with custom close button', () => <ModalCustomCloseIcon />, config)

// info broken due to hooks error
storiesOf(category, module).add('Modals with custom close icon', () => <ModalCustomCloseButton />, config)

// info broken due to hooks error
storiesOf(category, module).add('Destructuring', () => <ModalDestructuring />, config)

// info broken due to hooks error
storiesOf(category, module).add('Focus after close', () => <ModalFocusAfterClose />, config)
