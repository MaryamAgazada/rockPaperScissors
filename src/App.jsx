import { useState } from 'react'
import './App.css'
import Computer from './conponent/Computer';

function App() {
  let [compSc,setComp] = useState("Rock") ;
  let [userSc,setUser] = useState("") ;
  let [winner,setWinner] = useState("Who is Winner?") ;
  // Rock -> 0
  // Paper -> 1
  // Scissors ->2
  return (
    <>
      <Computer compSc = {compSc} setComp = {setComp} userSc = {userSc} setUser = {setUser} winner = {winner} setWinner = {setWinner}/>
    </>
  )
}

export default App
