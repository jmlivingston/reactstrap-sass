import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Carousel from './examples/Example0Carousel'
import Example1CarouselUncontrolled from './examples/Example1CarouselUncontrolled'
import Example2CarouselCustomTag from './examples/Example2CarouselCustomTag'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Carousel' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Carousel', module).add('Carousel Properties', () => <Example0Carousel />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Carousel', module).add('CarouselItem Properties', () => <Example1CarouselUncontrolled />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Carousel', module).add('CarouselControl Properties', () => <Example2CarouselCustomTag />, config)
