import { useState } from "react";
import { useEffect } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {

  const [workout,setWorkout] =  useState(null)
  const [fire, setFire] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')
  const [showGenerator, setShowGenerator] = useState(false)

  function updateWorkout(){
    
   if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({fire, muscles, goal})
    // console.log(newWorkout)
    setWorkout(newWorkout)

    // window.location.href = '#workout'
  }
     // --- ADD THIS useEffect HOOK ---
    useEffect(() => {
    // This effect runs whenever the 'workout' state changes.
    // It will only execute the scroll if workout is not null and has content (i.e., successfully generated)
    if (workout && workout.length > 0) { // Check if workout is not null AND has items
      const workoutSection = document.getElementById('workout');
      if (workoutSection) {
        // Use scrollIntoView for smooth scrolling, or window.location.hash for direct jump
        workoutSection.scrollIntoView({ behavior: 'smooth' });
        // Alternatively, for direct hash navigation (less smooth):
        // window.location.hash = 'workout';
      }
    }
  }, [workout]); // The effect depends on the 'workout' state. It runs when 'workout' changes

  useEffect(() => {
    // This effect runs ONLY when 'showGenerator' becomes true.
    if (showGenerator) {
      const generatorSection = document.getElementById('generate');
      if (generatorSection) {
        generatorSection.scrollIntoView({ behavior: 'smooth' });
      }
      setShowGenerator(false);
    }
  }, [showGenerator]); // Dependency: Re-run effect when 'showGenerator' state changes

  const handleLightTheTorchClick =  () => {
    setShowGenerator(true);
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero onLightTheTorch = {handleLightTheTorchClick}/>
      <Generator fire={fire} setFire={setFire} muscles ={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout}/>
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
