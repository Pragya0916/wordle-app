import React, { useContext } from 'react'
import './Letter.css'

const Letter = ({letterPos, attemptVal}) => {

    const {board , setDisabledLetters, currAttempt , correctWord} = useContext()
  return (
   <div className='letter'>

   </div>
  )
}

export default Letter