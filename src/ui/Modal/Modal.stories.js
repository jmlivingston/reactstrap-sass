import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
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

const config = baseConfigHelpers.getConfig({ name: 'Modal' })

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: Modal', () => <Modal />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalBackdrop', () => <ModalBackdrop />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalNested', () => <ModalNested />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalCustomTimeout', () => <ModalCustomTimeout />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalFadeless', () => <ModalFadeless />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalExternal', () => <ModalExternal />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalCustomCloseIcon', () => <ModalCustomCloseIcon />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalCustomCloseButton', () => <ModalCustomCloseButton />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalDestructuring', () => <ModalDestructuring />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalFocusAfterClose', () => <ModalFocusAfterClose />, config)
