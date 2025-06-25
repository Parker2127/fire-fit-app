import React from 'react'
import SectionWrapper from './SectionWrapper'


function Header(props){
    const { index, title, description } = props
    return (
        <div>
            <div>
                <p>{index} </p>
                <h4>{title} </h4>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default function Generator() {
  return (
   <SectionWrapper header={"generate your workout"} title= {['Enter', 'The', 'Dragon']}> {/* adding header for the use case of banners */}
     <Header index={'01'} title="Pick your fire" description="Select the dragon you want to slay"/>
   </SectionWrapper>  /* Anything wrapped between the SectionWrapper component { parent tag } are considered to be children */
  )
}
