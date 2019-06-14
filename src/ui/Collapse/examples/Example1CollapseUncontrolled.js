import React from 'react'
import Button from '../../Button/Button'
import Card from '../../Card/Card'
import CardBody from '../../CardBody/CardBody'
import UncontrolledCollapse from '../../UncontrolledCollapse/UncontrolledCollapse'

const Example = () => (
  <>
    <Button color="primary" id="toggler" className="mb-1">
      Toggle
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a
          molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </>
)

export default Example
