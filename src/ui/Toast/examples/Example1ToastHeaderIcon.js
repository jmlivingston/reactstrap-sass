import React from 'react'
import Spinner from '../../Spinner/Spinner'
import ToastBody from '../../ToastBody/ToastBody'
import ToastHeader from '../../ToastHeader/ToastHeader'
import Toast from '../Toast'

const Example = () => (
  <>
    <Toast>
      <ToastHeader icon="primary">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a primary icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="secondary">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a secondary icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="success">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a success icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="danger">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a danger icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="warning">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a warning icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="info">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with an info icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="light">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a light icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon="dark">Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a dark icon — check it out!</ToastBody>
    </Toast>
    <Toast>
      <ToastHeader icon={<Spinner size="sm" />}>Reactstrap</ToastHeader>
      <ToastBody>This is a toast with a custom icon — check it out!</ToastBody>
    </Toast>
  </>
)

export default Example
