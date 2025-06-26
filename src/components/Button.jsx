import React from 'react'

export default function Button(props) {

  const {text} = props
  return (
    <button className='px-4 py-4 rounded-md border-[2px] bg-slate-950 border-orange-700 border-solid fireTorch duration:200'> <p>{ text }</p></button>
  )
}
