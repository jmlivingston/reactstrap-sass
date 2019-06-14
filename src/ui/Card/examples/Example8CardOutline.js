import React from 'react'
import Button from '../../Button/Button'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Card from '../Card'

const Example = () => (
  <>
    <Card body outline color="secondary">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Button</Button>
    </Card>
    <Card body outline color="primary">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body outline color="success">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body outline color="info">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body outline color="warning">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body outline color="danger">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
  </>
)

export default Example
