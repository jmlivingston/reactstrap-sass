import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Modal from './examples/Modal'
import ModalBackdrop from './examples/ModalBackdrop'
import ModalNested from './examples/ModalNested'
import ModalCustomTimeout from './examples/ModalCustomTimeout'
import ModalFadeless from './examples/ModalFadeless'
import ModalExternal from './examples/ModalExternal'
import ModalCustomCloseIcon from './examples/ModalCustomCloseIcon'
import ModalCustomCloseButton from './examples/ModalCustomCloseButton'
import ModalDestructuring from './examples/ModalDestructuring'
import ModalFocusAfterClose from './examples/ModalFocusAfterClose'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Modal' })
  }
}

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
