import { storiesOf } from '@storybook/react'
import React from 'react'
import baseConfig from '../../../.storybook/baseConfig'
import Carousel from './examples/Carousel'
import CarouselUncontrolled from './examples/CarouselUncontrolled'
import CarouselCustomTag from './examples/CarouselCustomTag'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Carousel' })
  }
}

// TODO: info broken due to hooks error
storiesOf('UI|Carousel', module).add('Carousel Properties', () => <Carousel />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Carousel', module).add('CarouselItem Properties', () => <CarouselUncontrolled />, config)

// TODO: info broken due to hooks error
storiesOf('UI|Carousel', module).add('CarouselControl Properties', () => <CarouselCustomTag />, config)
