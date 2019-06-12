/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('Button', () => {
  test('finds TODO: Button', () => {
    const { getByText } = render(<Button text={'TODO: Button'} />)
    expect(getByText('TODO: Button'))
  })
})
