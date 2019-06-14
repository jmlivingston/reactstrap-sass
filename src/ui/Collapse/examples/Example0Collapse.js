import React, { useState } from 'react'
import Button from '../../Button/Button'
import Card from '../../Card/Card'
import CardBody from '../../CardBody/CardBody'
import Collapse from '../../Collapse/Collapse'

const Example = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button color="primary" onClick={() => setIsOpen(!isOpen)} className="mb-1">
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </>
  )
}

export default Example
