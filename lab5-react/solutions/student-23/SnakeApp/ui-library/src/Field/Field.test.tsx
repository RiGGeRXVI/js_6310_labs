import { render } from '@testing-library/react'
import { Field } from './Field'

describe('Field component', () => {
  it('renders initial snake', () => {
    const { container } = render(<Field width={10} height={10} snakes={[[{ x: 1, y: 1 }]]} />)
    const snakeSegments = container.getElementsByClassName('snake-segment')
    expect(snakeSegments.length).toBe(1)
  })
})
