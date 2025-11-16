import React, { useEffect } from 'react'
import './Snake.css'

export type Position = { x: number; y: number }

export interface SnakeProps {
  body: Position[]
  size?: number
  color?: string
}

export const Snake: React.FC<SnakeProps> = ({
  body,
  size = 20,
  color = 'limegreen',
}) => {
  useEffect(() => {
    if (body.length === 0) {
      console.warn('Snake body is empty')
    }
  }, [body])

  return (
    <>
      {body.map((segment, index) => (
        <div
          key={index}
          role="presentation"
          className="snake-segment"
          style={{
            position: 'absolute',
            left: segment.x * size,
            top: segment.y * size,
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: 3,
          }}
          data-testid="snake-segment"
        />
      ))}
    </>
  )
}

export default Snake
