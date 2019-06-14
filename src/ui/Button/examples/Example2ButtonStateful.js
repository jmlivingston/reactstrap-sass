import React, { useState } from 'react'
import ButtonGroup from '../../ButtonGroup/ButtonGroup'
import Button from '../Button'

const Example = () => {
  const [radioSelected, setRadioSelected] = useState()
  const [checkboxesSelected, setCheckboxesSelected] = useState([])

  const onCheckboxClick = selected => {
    const index = checkboxesSelected.indexOf(selected)
    if (index < 0) {
      checkboxesSelected.push(selected)
    } else {
      checkboxesSelected.splice(index, 1)
    }
    setCheckboxesSelected(checkboxesSelected)
  }

  return (
    <>
      <h5>Radio Buttons</h5>
      <ButtonGroup>
        <Button color="primary" onClick={() => setRadioSelected(1)} active={radioSelected === 1}>
          One
        </Button>
        <Button color="primary" onClick={() => setRadioSelected(2)} active={radioSelected === 2}>
          Two
        </Button>
        <Button color="primary" onClick={() => setRadioSelected(3)} active={radioSelected === 3}>
          Three
        </Button>
      </ButtonGroup>
      <p>Selected: {radioSelected}</p>

      <h5>Checkbox Buttons</h5>
      <ButtonGroup>
        <Button color="primary" onClick={() => onCheckboxClick(1)} active={checkboxesSelected.includes(1)}>
          One
        </Button>
        <Button color="primary" onClick={() => onCheckboxClick(2)} active={checkboxesSelected.includes(2)}>
          Two
        </Button>
        <Button color="primary" onClick={() => onCheckboxClick(3)} active={checkboxesSelected.includes(3)}>
          Three
        </Button>
      </ButtonGroup>
      <p>Selected: {JSON.stringify(checkboxesSelected, null, 2)}</p>
    </>
  )
}

export default Example
