import React from 'react'
import Container from '../../Container/Container'
import Jumbotron from '../../Jumbotron/Jumbotron'

const Example = () => (
  <Jumbotron fluid>
    <Container fluid>
      <h1 className="display-3">Fluid jumbotron</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </Container>
  </Jumbotron>
)

export default Example
