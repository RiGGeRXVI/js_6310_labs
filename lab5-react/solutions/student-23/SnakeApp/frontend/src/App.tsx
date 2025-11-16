import { useState, useEffect, useRef } from 'react'

import { Field } from '@my-app/ui-library'

import type { Position } from '@my-app/ui-library'
import './app.css'

const App = () => {
  const [snakes, setSnakes] = useState<
    { body: Position[]; direction: 'up' | 'down' | 'left' | 'right' }[]
  >([
    { body: [{ x: 5, y: 5 }, { x: 4, y: 5 }], direction: 'right' },
    { body: [{ x: 10, y: 10 }, { x: 9, y: 10 }], direction: 'left' },
  ])

  const width = 20
  const height = 20
  const speed = 300

  const directionRef = useRef(snakes.map((s) => s.direction))

  useEffect(() => {
    directionRef.current = snakes.map((s) => s.direction)
  }, [snakes])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSnakes((prevSnakes) =>
        prevSnakes.map((snake, idx) => {
          // Управление для первой змеи — стрелки
          // Для второй — WASD

          if (
            idx === 0 &&
            ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)
          ) {
            const newDir = mapKeyToDirection(e.key)

            if (!isOppositeDirection(snake.direction, newDir)) {
              return { ...snake, direction: newDir }
            }
          }

          if (
            idx === 1 &&
            ['w', 'a', 's', 'd'].includes(e.key.toLowerCase())
          ) {
            const newDir = mapKeyToDirection(e.key.toLowerCase())

            if (!isOppositeDirection(snake.direction, newDir)) {
              return { ...snake, direction: newDir }
            }
          }

          return snake
        }),
      )
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSnakes((prevSnakes) =>
        prevSnakes.map(({ body, direction }) => {
          const newHead = { ...body[0] }
          
          switch (direction) {
          case 'right':
            newHead.x = (newHead.x + 1) % width
            break
          case 'left':
            newHead.x = (newHead.x - 1 + width) % width
            break
          case 'up':
            newHead.y = (newHead.y - 1 + height) % height
            break
          case 'down':
            newHead.y = (newHead.y + 1) % height
            break
          }

          return { body: [newHead, ...body.slice(0, -1)], direction }
        }),
      )
    }, speed)

    return () => clearInterval(interval)
  }, [width, height, speed])

  return (
    <div className="app">
      <h1>Snake Game - Two Players</h1>

      <Field width={width} height={height} snakes={snakes.map((s) => s.body)} />
    </div>
  )
}

function isOppositeDirection(
  current: 'up' | 'down' | 'left' | 'right',
  next: 'up' | 'down' | 'left' | 'right',
) {
  return (
    (current === 'up' && next === 'down') ||
    (current === 'down' && next === 'up') ||
    (current === 'left' && next === 'right') ||
    (current === 'right' && next === 'left')
  )
}

function mapKeyToDirection(key: string) {
  switch (key) {
  case 'ArrowUp':
  case 'w':
    return 'up'
  case 'ArrowDown':
  case 's':
    return 'down'
  case 'ArrowLeft':
  case 'a':
    return 'left'
  case 'ArrowRight':
  case 'd':
    return 'right'
  default:
    return 'right'
  }
}

export default App
