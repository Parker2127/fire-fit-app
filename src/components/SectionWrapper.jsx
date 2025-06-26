import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title, id} = props      /* The children are now desconstructed and be used in our SectionWrapper using props*/
                                                 /* The header and title are retrieved too using props*/
    
    return (
        <section id ={id} className='min-h-screen flex flex-col gap-10'>
            <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center'>
                <p className='uppercase font-medium'>{header}</p>
                <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text:6xl'>
                    {title[0]} {title[1]} <span className='uppercase text-orange-600'>{title[2]}</span>
                </h2>     {/* using span so that we can style each word in the title separately */}
            </div>
            <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10'>
                {children}
            </div>
        </section>
    )

}
