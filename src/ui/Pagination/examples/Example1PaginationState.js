import React from 'react'
import PaginationItem from '../../PaginationItem/PaginationItem'
import PaginationLink from '../../PaginationLink/PaginationLink'
import Pagination from '../Pagination'

const Example = () => (
  <Pagination aria-label="Page navigation example">
    <PaginationItem disabled>
      <PaginationLink first href="/" />
    </PaginationItem>
    <PaginationItem disabled>
      <PaginationLink previous href="/" />
    </PaginationItem>
    <PaginationItem active>
      <PaginationLink href="/">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink next href="/" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink last href="/" />
    </PaginationItem>
  </Pagination>
)

export default Example
