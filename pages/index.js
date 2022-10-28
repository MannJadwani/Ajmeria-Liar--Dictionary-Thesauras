
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import { Board } from './components/Board'
import { ScoreBoard } from './components/ScoreBoard'

export default function Home() {



  const [board,setBoard]=useState(Array(9).fill(null))
  const [turn,setTurn]= useState('X')
  const[score,setScore]=useState({xScore:0,oScore:0})
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]

    const checkWinner = (board)=>{
for(let i=0;i<WIN_CONDITIONS.length;i++){
  const[x,y,z]=WIN_CONDITIONS[i]
  if(board[x]&&board[x]==board[y]&&board[y]==board[z]){
    console.log(board[x])
    return board[x]
    
  }
}
    }
  
const handleBoxClick = (boxIdx) =>{
  const updatedBoard = board.map((value,idx)=>{
    if(idx===boxIdx && value ==null){
      return turn
    }else{
      return value
    }
  }
  )
  setBoard(updatedBoard)
  setTurn((turn)=>{
    if(turn=='X'){
      return  'O'
    }else{
      return 'X'
    }
    
  })
  const winner=checkWinner(updatedBoard)
if(winner){
  if(winner=='X'){
    let {xScore} = score;
    xScore+=1
    setScore({...score,xScore})
  }else if(winner=='O'){
    let {oScore} = score;
    oScore+=1
    setScore({...score,oScore})
  }
  if(winner ){
    setBoard(Array(9).fill(null))
  }
}


console.log(score)

} 

  return (
    <div className={styles.container}>
     <div className='container'>
      <Board board={board} onClick={handleBoxClick}/>
      <ScoreBoard xScore={score.xScore} oScore={score.oScore}/>
     </div>
    </div>
  )
}
