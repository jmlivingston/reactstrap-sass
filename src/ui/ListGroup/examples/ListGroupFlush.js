import React from 'react'
import ListGroupItem from '../../ListGroupItem/ListGroupItem'
import ListGroup from '../ListGroup'

const Example = () => (
  <ListGroup flush>
    <ListGroupItem disabled tag="a" href="/">
      Cras justo odio
    </ListGroupItem>
    <ListGroupItem tag="a" href="/">
      Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem tag="a" href="/">
      Morbi leo risus
    </ListGroupItem>
    <ListGroupItem tag="a" href="/">
      Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem tag="a" href="/">
      Vestibulum at eros
    </ListGroupItem>
  </ListGroup>
)

export default Example
