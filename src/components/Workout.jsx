import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExcerciseCard'

export default function Workout(props) {
  const {workout} = props
  return (
     <SectionWrapper header={"Welcome to"} title= {['The', 'DRAGON', 'NEST']}>

        <div className='flex flex-col gap-4'>
            {workout.map((exercise, i) => {
                return(
                    <ExcerciseCard exercise={exercise} key={i}/>
                )
            })}
        </div> 

     </SectionWrapper>

  )
}
