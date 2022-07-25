import React from 'react'
import Letter from './Letter'

const Board = () => {
  return (
    <> 
    <div>
        <Letter letterPos={0} attemptVal={0}/>
        <Letter letterPos={1}/>
        <Letter letterPos={2}/>
        <Letter letterPos={3}/>
        <Letter letterPos={4}/>
        <Letter letterPos={5}/>
         
         
        </div>
<div>   <Letter/>
        <Letter/>
        <Letter/>
        <Letter/>
        <Letter/>
         </div>
      
        </>
  )
}

export default Board