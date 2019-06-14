import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Modal from './examples/Example0Modal'
import Example1ModalBackdrop from './examples/Example1ModalBackdrop'
import Example2ModalNested from './examples/Example2ModalNested'
import Example3ModalCustomTimeout from './examples/Example3ModalCustomTimeout'
import Example4ModalFadeless from './examples/Example4ModalFadeless'
import Example5ModalExternal from './examples/Example5ModalExternal'
import Example6ModalCustomCloseIcon from './examples/Example6ModalCustomCloseIcon'
import Example7ModalCustomCloseButton from './examples/Example7ModalCustomCloseButton'
import Example8ModalDestructuring from './examples/Example8ModalDestructuring'
import Example9ModalFocusAfterClose from './examples/Example9ModalFocusAfterClose'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Modal' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: Modal', () => <Example0Modal />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalBackdrop', () => <Example1ModalBackdrop />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalNested', () => <Example2ModalNested />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalCustomTimeout', () => <Example3ModalCustomTimeout />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalFadeless', () => <Example4ModalFadeless />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalExternal', () => <Example5ModalExternal />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalCustomCloseIcon', () => <Example6ModalCustomCloseIcon />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalCustomCloseButton', () => <Example7ModalCustomCloseButton />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalDestructuring', () => <Example8ModalDestructuring />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Modal', module).add('TODO: ModalFocusAfterClose', () => <Example9ModalFocusAfterClose />, config)
