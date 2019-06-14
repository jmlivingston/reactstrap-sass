import React from 'react'
import BreadcrumbItem from '../../BreadcrumbItem/BreadcrumbItem'
import Breadcrumb from '../Breadcrumb'

const Example = () => (
  <Breadcrumb tag="nav" listTag="div">
    <BreadcrumbItem tag="a" href="/">
      Home
    </BreadcrumbItem>
    <BreadcrumbItem tag="a" href="/">
      Library
    </BreadcrumbItem>
    <BreadcrumbItem tag="a" href="/">
      Data
    </BreadcrumbItem>
    <BreadcrumbItem active tag="span">
      Bootstrap
    </BreadcrumbItem>
  </Breadcrumb>
)

export default Example
