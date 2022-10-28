import React from 'react'
import Box from './Box'
import styles from './Board.module.css'
export const Board = ({board,onClick}) => {
  return (
    <div className={styles.board}>
        {board.map((value,idx)=>{
            return <Box value={value} onClick={()=> value==null && onClick(idx)}/>
        })}
        
    </div>
  )
}
