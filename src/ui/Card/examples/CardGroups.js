import React from 'react'
import Button from '../../Button/Button'
import CardBody from '../../CardBody/CardBody'
import CardGroup from '../../CardGroup/CardGroup'
import CardImg from '../../CardImg/CardImg'
import CardSubtitle from '../../CardSubtitle/CardSubtitle'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Card from '../Card'

const Example = () => (
  <CardGroup>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
          little bit longer.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even
          longer content than the first to show that equal height action.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </CardGroup>
)

export default Example
