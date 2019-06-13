import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Button from '../Button/Button'

class Example0 extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary">primary</Button> <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button> <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button> <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
    )
  }
}

storiesOf('Button', module).add('Button - Basic', () => <Example0 />, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Button' })
  }
})
