import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Carousel from './examples/Carousel'
import CarouselCustomTag from './examples/CarouselCustomTag'
import CarouselUncontrolled from './examples/CarouselUncontrolled'

const config = storyConfigHelpers.getConfig({ name: 'Carousel' })

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Carousel`, module).add('Carousel Properties', () => <Carousel />, config)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Carousel`, module).add(
  'CarouselItem Properties',
  () => <CarouselUncontrolled />,
  config
)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Carousel`, module).add(
  'CarouselControl Properties',
  () => <CarouselCustomTag />,
  config
)
