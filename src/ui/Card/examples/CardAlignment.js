import React from 'react'
import Button from '../../Button/Button'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Card from '../Card'

const Example = () => (
  <>
    <Card body>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </Card>
    <Card body className="text-center">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </Card>
    <Card body className="text-right">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </Card>
  </>
)

export default Example
