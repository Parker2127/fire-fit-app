import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'> {/* This just makes all the elements move to the center */}
        <div className='flex flex-col gap-4'>   {/* using div to group p and h1, to make them look closer together */}
            <p> IT'S TIME TO GET </p>
            <h1 className= 'uppercase font-semi text-4xl sm:test-5xl  md:text-6xl large:text-7xl'> FIRED <span className='text-orange-700 font-medium'> UP </span></h1>     {/* Add fire animation next to fired up later */}
        </div>
      <p className='text-sm md:text-base font-medium'> I am insanely getting <span className='text-orange-700 font-medium'>fired up</span>, no one can stop me, I believe in myself and I am ready to tackle anything that comes in my way. It is <span className='text-orange-700 font-medium'>do or die</span> and I am definitely doing it.</p>
      {/* Adding span will let us style the test inside span separately*/}

      <button className='px-4 py-4 rounded-md border-[2px] bg-slate-950 border-orange-700 border-solid fireTorch duration:200'> <p> Accept and Begin </p></button>
    </div>
  )
}
