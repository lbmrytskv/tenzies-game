import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'


export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}