import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

describe('Home Page', () => {
  it('renders heading and CTA', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByText(/The Ultimate frontend/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })
})
