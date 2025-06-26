import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {

  const [workout,setWorkout] =  useState(null)
  const [fire, setFire] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout(){
    if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({fire, muscles, goal})
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator fire={fire} setFire={setFire}
                  muscles ={muscles} setMuscles={setMuscles}
                  goal={goal} setGoal={setGoal}
                  updateWorkout={updateWorkout} />
      {workout && <Workout workout = {workout}/>}
    </main>
  )
}

export default App
