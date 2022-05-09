import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'
import { getPostsSortedData } from '../lib/posts'
import { getTalks } from '../lib/talks'

describe('Home', () => {
  const allPostsData = getPostsSortedData()
  const allTalksData = getTalks()

  it('renders a profile image', () => {
    const { getByText } = render(
      <Index allPostsData={allPostsData} allTalksData={allTalksData} />,
    )
    const profilePicture = getByText(/developer and writer/i)

    expect(profilePicture).toBeInTheDocument()
  })
})
