import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Generator() {
  return (
   <SectionWrapper header={"generate your workout"} title= {['Enter', 'The', 'Dragon']}> {/* adding header for the use case of banners */}
    SectionWrapper
   </SectionWrapper>  /* Anything wrapped between the SectionWrapper component { parent tag } are considered to be children */
  )
}
