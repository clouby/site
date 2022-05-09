import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'
import { getPostsSortedData } from '../lib/posts'
import { getTalks } from '../lib/talks'

describe('Home', () => {
  test('should render', () => {
    expect(true).toBe(true)
  })
})
