import React from 'react'
import Button from '../../Button/Button'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Col from '../../Col/Col'
import Row from '../../Row/Row'
import Card from '../Card'

const Example = () => (
  <Row>
    <Col sm="6">
      <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
    <Col sm="6">
      <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
  </Row>
)

export default Example
