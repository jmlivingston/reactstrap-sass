import { storiesOf } from '@storybook/react'
import React from 'react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Carousel from './examples/Carousel'
import CarouselCustomTag from './examples/CarouselCustomTag'
import CarouselUncontrolled from './examples/CarouselUncontrolled'

const config = baseConfigHelpers.getConfig({ name: 'Carousel' })

// TODO: info broken due to hooks error
storiesOf('UI | Carousel', module).add('Carousel Properties', () => <Carousel />, config)

// TODO: info broken due to hooks error
storiesOf('UI | Carousel', module).add('CarouselItem Properties', () => <CarouselUncontrolled />, config)

// TODO: info broken due to hooks error
storiesOf('UI | Carousel', module).add('CarouselControl Properties', () => <CarouselCustomTag />, config)
