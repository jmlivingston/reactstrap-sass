import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'

import React from 'react';
import Button from '../Button/Button'

 class Example1 extends React.Component {
  render() {
    return (
      <div>
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>
      </div>
    );
  }
}


storiesOf('Button', module).add('Outline Buttons', Example1, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Button' })
  }
})
      
