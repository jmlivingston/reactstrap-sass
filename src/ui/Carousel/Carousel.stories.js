import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Carousel from './examples/Carousel'
import CarouselCustomTag from './examples/CarouselCustomTag'
import CarouselUncontrolled from './examples/CarouselUncontrolled'

const name = 'ButtonDropdown'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

// TODO: info broken due to hooks error
storiesOf(category, module).add('Carousel Properties', () => <Carousel />, config)

// TODO: info broken due to hooks error
storiesOf(category, module).add(
  'CarouselItem Properties',
  () => <CarouselUncontrolled />,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledCarousel</code> does not require <code>previous</code>, <code>next</code> nor <code>activeIndex</code> props to work. Anything provided to a normal <code>Carousel</code> can also be provided to <code>UncontrolledCarousel</code>, overriding the control <code>UncontrolledCarousel</code> provides. Additionally, you can hide the controls by passing <code>false</code> to the <code>controls</code> prop and you can disable the indicators by passing <code>false</code> to the <code>indicators</code> prop; both are visible by default. Autoplay (<code>ride="carousel"</code>) is enabled by default, you can disable it by passing <code>false</code> to the <code>autoPlay</code> prop.</p><p>Properties: Same as Carousel (except children) can be overridden plus the following</p>`
  })
)

// TODO: info broken due to hooks error
storiesOf(category, module).add('CarouselControl Properties', () => <CarouselCustomTag />, config)
