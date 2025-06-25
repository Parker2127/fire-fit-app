import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title} = props      /* The children are now desconstructed and be used in our SectionWrapper using props*/
                                                 /* The header and title are retrieved too using props*/
    
    return (
        <section className='min-h-screen flex flex-col gap-10'>
            <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center'>
                <p>{header}</p>
                <h2>{title[0]} <span>{title[1]}</span> {title[2]}</h2>     {/* using span so that we can style each word in the title separately */}
            </div>
            {children}
        </section>
    )

}
