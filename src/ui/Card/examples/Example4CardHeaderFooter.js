import React from 'react'
import Button from '../../Button/Button'
import CardBody from '../../CardBody/CardBody'
import CardFooter from '../../CardFooter/CardFooter'
import CardHeader from '../../CardHeader/CardHeader'
import CardText from '../../CardText/CardText'
import CardTitle from '../../CardTitle/CardTitle'
import Card from '../Card'

const Example = () => (
  <>
    <Card>
      <CardHeader>Header</CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>

    <Card>
      <CardHeader tag="h3">Featured</CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </CardBody>
      <CardFooter className="text-muted">Footer</CardFooter>
    </Card>
  </>
)

export default Example
