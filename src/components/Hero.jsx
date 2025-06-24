import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center'> {/* This just makes all the elements move to the center */}
      <p> IT's TIME TO GET </p>
      <h1> FIRED <span> UP </span></h1>
      <p> I am insanely getting <span>fired up</span>, no one can stop me, I believe in myself and I am ready to tackle anything that comes in my way. It is <span>do or die</span> and I am definitely doing it.</p>
      {/* Adding span will let us style the test inside span separately*/}
    </div>
  )
}
