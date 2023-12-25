import React from 'react'
import UseWindowResize from './UseWindowResize'

const UseWindowResizeTest = () => {
  const windowSize = UseWindowResize()
  const {width, height} = windowSize

  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  )
}

export default UseWindowResizeTest
