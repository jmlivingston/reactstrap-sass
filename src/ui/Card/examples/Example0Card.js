import React from 'react'
import Button from '../../Button/Button'
import CardBody from '../../CardBody/CardBody'
import CardImg from '../../CardImg/CardImg'
import CardSubtitle from '../../CardSubtitle/CardSubtitle'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Card from '../Card'

const Example = () => (
  <Card>
    <CardImg
      top
      width="100%"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      alt="Card image cap"
    />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
)

export default Example
