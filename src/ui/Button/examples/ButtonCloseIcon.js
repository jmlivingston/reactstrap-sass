import React from 'react'
import Card from '../../Card/Card'
import CardBody from '../../CardBody/CardBody'
import CardGroup from '../../CardGroup/CardGroup'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Button from '../Button'

const Example = () => (
  <CardGroup>
    <Card>
      <CardBody>
        <CardTitle>
          <Button close />
        </CardTitle>
        <CardText>Default close icon</CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <Button close aria-label="Cancel">
            <span aria-hidden>&ndash;</span>
          </Button>
        </CardTitle>
        <CardText>Custom content and aria-label</CardText>
      </CardBody>
    </Card>
  </CardGroup>
)

export default Example
