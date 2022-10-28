import React from 'react'

export const ScoreBoard = (props) => {
  return (
    <div>
<h1>X Score: {props.xScore} O Score:{props.oScore}</h1>
    </div>
  )
}
