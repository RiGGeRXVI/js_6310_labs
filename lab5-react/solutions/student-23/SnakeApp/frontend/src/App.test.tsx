import { render, screen } from '@testing-library/react'

import App from './App'

describe('App component', () => {
  it('renders game title', () => {
    render(<App />)
    expect(screen.getByText(/Snake Game/i)).toBeInTheDocument()
  })
})
