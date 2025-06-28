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

  /* -------------------------------------------- Effect to disable browser's scroll restoration and force scroll to top ------------------------------------ */

  useEffect(() => {
    // Check if scrollRestoration is supported
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'; // Tell the browser NOT to restore scroll position
    }

    // Explicitly scroll to top
    // A small delay is still a good fallback in case of extremely fast renders or
    // if other scripts might momentarily interfere, but 'manual' restoration is key.
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);

    return () => {
        clearTimeout(timer);
        // Optional: Revert to auto scroll restoration on component unmount
        // For a root App component, this cleanup is rarely strictly necessary
        // but good practice if this component were ever to be unmounted
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'auto';
        }
    };
  }, []); // Empty dependency array: runs only once on mount

  /*-------------------------------------------- Upating workouts in the Workout section ------------------------------------ */

  function updateWorkout(){
    
   if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({fire, muscles, goal})
    // console.log(newWorkout)
    setWorkout(newWorkout)

    // window.location.href = '#workout'
  }

  /*--------------------------------------------Workout section smooth scrolling logic------------------------------------ */
  
     // --- ADD THIS useEffect HOOK ---
    useEffect(() => {
    // This effect runs whenever the 'workout' state changes.
    // It will only execute the scroll if workout is not null and has content (i.e., successfully generated)
    if (workout && workout.length > 0) { // Check if workout is not null AND has items
      const workoutSection = document.getElementById('workout');
      if (workoutSection) {
        // Use scrollIntoView for smooth scrolling, or window.location.hash for direct jump
        workoutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [workout]); // The effect depends on the 'workout' state. It runs when 'workout' changes

   /*--------------------------------------------Generate section smooth scrolling logic------------------------------------ */

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

  /*--------------------------------------------Handling Light the Torch button click------------------------------------ */
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
