import React from 'react'
import Button from '../../Button/Button'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Card from '../Card'

const Example = () => (
  <>
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Button</Button>
    </Card>
    <Card body inverse color="primary">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body inverse color="success">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body inverse color="info">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body inverse color="warning">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
    <Card body inverse color="danger">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="secondary">Button</Button>
    </Card>
  </>
)

export default Example
