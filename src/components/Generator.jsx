import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/fire'


function Header(props){
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index} </p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title} </h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
  return (
   <SectionWrapper header={"generate your workout"} title= {['Enter', 'The', 'Dragon']}> {/* adding header for the use case of banners */}
     
      {/*--------------------------------------  HEADER 01 ------------------------------------------------------- */}

     <Header index={'01'} title="Pick your fire" description="Select the dragon you want to slay"/>

     <div className='grid  grid-cols-2 sm:grid-cols-4 gap-4'>
        {/*Code to add the buttons using object mapping  */}

        {Object.keys(WORKOUTS).map((type, typeIndex)=>{
            return (<button className='bg-slate-950 border border-orange-600 duration-200 hover:border-orange-800 py-4 rounded-lg'  key= {typeIndex}>
                <p className='capitalize'> {type.replaceAll('_', " ")} </p>
            </button>
            )
        })}
     </div>

     {/*--------------------------------------  HEADER 02 ------------------------------------------------------- */}

     <Header index={'02'} title="Unleash the fury" description="Select the muscles you want to set ablaze"/>

     <div className='bg-slate-950 py-3 border border-solid border-orange-600 rounded-lg'>
        {/*Code to add the buttons using object mapping  */}

        <p>Select the dragon eggs to crack</p>
        <i className="fa-solid fa-caret-down"></i>
      
     </div>

     

   </SectionWrapper>  /* Anything wrapped between the SectionWrapper component { parent tag } are considered to be children */
  )
}
