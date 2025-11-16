import { render, screen } from '@testing-library/react'
import { Snake } from './Snake'

describe('Snake component', () => {
  it('renders segments', () => {
    const body = [{ x: 0, y: 0 }, { x: 1, y: 0 }]
    render(<Snake body={body} />)
    const segments = screen.getAllByTestId('snake-segment')
expect(segments).toHaveLength(2)
  })

  it('warns when body is empty', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
    render(<Snake body={[]} />)
    expect(warnSpy).toHaveBeenCalled()
    warnSpy.mockRestore()
  })
})
