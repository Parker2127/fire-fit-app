import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExcerciseCard'
import Button from './Button'

export default function Workout(props) {
  const {workout, onRekindle} = props
  return (
     <SectionWrapper id ="workout" header={"Welcome to"} title= {['The', 'DRAGON', 'NEST']}>

        <div className='flex flex-col gap-4 pb-5'>
            {workout.map((exercise, i) => {
                return(
                    <ExcerciseCard i= {i} exercise={exercise} key={i}/>
                )
            })}   
            
            <Button func = {onRekindle} text= {'Rekindle'}/>
        </div> 
    
     </SectionWrapper>

  )
}
