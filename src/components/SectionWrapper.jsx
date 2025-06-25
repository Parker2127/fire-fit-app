import React from 'react'

export default function SectionWrapper(props) {
    const {children} = props      /* The children are now desconstructed and be used in our SectionWrapper using props*/

  return (
   <div>   
   {children}
   </div>
)

}
