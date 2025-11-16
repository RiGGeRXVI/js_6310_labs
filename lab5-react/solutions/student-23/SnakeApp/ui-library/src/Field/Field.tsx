import React from 'react'
import { Snake, Position } from '../Snake/Snake'
import './Field.css'

interface FieldProps {
  width: number
  height: number
  snakes: Position[][]
}

export const Field: React.FC<FieldProps> = ({ width, height, snakes }) => {
  return (
    <div
      className="field"
      style={{
        position: 'relative',
        width: width * 20,
        height: height * 20,
        backgroundColor: '#111',
        overflow: 'hidden',
      }}
      aria-label="game field"
    >
      {snakes.map((body, idx) => (
        <Snake
          key={idx}
          body={body}
          color={idx === 0 ? 'limegreen' : 'orange'}
        />
      ))}
    </div>
  )
}
