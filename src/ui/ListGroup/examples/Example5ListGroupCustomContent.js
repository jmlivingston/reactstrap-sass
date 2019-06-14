import React from 'react'
import ListGroupItem from '../../ListGroupItem/ListGroupItem'
import ListGroupItemHeading from '../../ListGroupItemHeading/ListGroupItemHeading'
import ListGroupItemText from '../../ListGroupItemText/ListGroupItemText'
import ListGroup from '../ListGroup'

const Example = () => (
  <ListGroup>
    <ListGroupItem active>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </ListGroupItemText>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </ListGroupItemText>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </ListGroupItemText>
    </ListGroupItem>
  </ListGroup>
)

export default Example
