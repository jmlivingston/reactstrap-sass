import React, { useState } from 'react'
import CarouselCaption from '../../CarouselCaption/CarouselCaption'
import CarouselControl from '../../CarouselControl/CarouselControl'
import CarouselIndicators from '../../CarouselIndicators/CarouselIndicators'
import CarouselItem from '../../CarouselItem/CarouselItem'
import Carousel from '../Carousel'

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

const Example = () => {
  let isAnimating = false
  const [activeIndex, setActiveIndex] = useState(0)

  const next = newIndex => {
    if (isAnimating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = newIndex => {
    if (isAnimating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (isAnimating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => (
    <CarouselItem
      className="custom-tag"
      tag="div"
      key={item.id}
      onExiting={() => (isAnimating = true)}
      onExited={() => (isAnimating = false)}>
      <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ))

  return (
    <>
      <style>
        {`.custom-tag {
            max-width: 100%;
            height: 500px;
            background: black;
          }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </>
  )
}

export default Example
