import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/fire'


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

    const [showModal, setShowModal] = useState(false)
    const [fire, setFire] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState('strength_power')

//   let showModal = false;

    function toggleModal(){
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup){

            if (muscles.includes(muscleGroup)) {
                setMuscles(muscles.filter(val => val !== muscleGroup))
                return
            }

            if (muscles.length > 2) {
                return
            }

            if (fire !== 'individual') {
                setMuscles([muscleGroup])
                setShowModal(false)
                return
            }

            setMuscles([...muscles, muscleGroup])
            if (muscles.length === 2) {
                setShowModal(false)
            }

    }
  
    return (
    <SectionWrapper header={"generate your workout"} title= {['Enter', 'The', 'Dragon']}> {/* adding header for the use case of banners */}
        
        {/*--------------------------------------  HEADER 01 ------------------------------------------------------- */}

        <Header index={'01'} title="Pick your fire" description="Select the dragon you want to slay"/>

        <div className='grid  grid-cols-2 sm:grid-cols-4 gap-4'>
            {/*Code to add the buttons using object mapping  */}

            {Object.keys(WORKOUTS).map((type, typeIndex)=>{
                return (
                
                    <button onClick= {() => {
                        setFire(type)
                    }} className={'bg-slate-950 border duration-200 hover:border-orange-800 py-4 rounded-lg ' + (type === fire ? 'border-orange-800' : 'border-orange-600')} key={typeIndex}>
                        <p className='capitalize'> {type.replaceAll('_', " ")} </p>
                    </button>

                )
            })}
        </div>

        {/*--------------------------------------  HEADER 02 ------------------------------------------------------- */}

        <Header index={'02'} title="Unleash the fury" description="Select the muscles you want to set ablaze"/>

        <div className='bg-slate-950 flex flex-col border border-solid border-orange-600 hover:border-orange-800 rounded-lg'>
            {/*Code to add the dropdown */}
            <button onClick= {toggleModal} className='relative flex p-3 items-center justify-center'>
                <p>Select the dragon eggs to crack</p>
                <i className="fa-solid absolute right-3 top-1/2  -translate-y-1/2 fa-caret-down"></i>
            </button>
            {showModal && (
                <div className='flex flex-col p-3'>
                    {(fire === 'individual' ? WORKOUTS[fire] : Object.keys(WORKOUTS[fire])).map((muscleGroup, muscleGroupIndex) => {
                        return (
                            <button onClick={() => {
                                updateMuscles(muscleGroup)
                            }} key={muscleGroupIndex} className={'hover:text-orange-600 duration-200 '  +  (muscles.includes(muscleGroup) ? ' text-orange-600' : ' ') }  >
                                <p className='uppercase'>{muscleGroup.replaceAll('_', " ")}</p>
                            </button>
                        )
                    } )}
                </div>
            )}
        </div>

        {/*--------------------------------------  HEADER 03------------------------------------------------------- */}

        <Header index={'03'} title="Become a dragon warrior" description="Select the dragon you want to train"/>

        <div className='grid  grid-cols-3  gap-4'>
            {/*Code to add buttons using object mapping  */}

            {Object.keys(SCHEMES).map((scheme, schemeIndex)=>{
                return (

                    <button onClick= {() => {
                    setGoal(scheme)
                }} className={'bg-slate-950 border duration-200 hover:border-orange-800 py-4 rounded-lg ' + (scheme === goal ? 'border-orange-800' : 'border-orange-600')} key={schemeIndex}>
                    <p className='capitalize'> {scheme.replaceAll('_', " ")} </p>
                </button>
                )
            })}
        </div>


        

    </SectionWrapper>  /* Anything wrapped between the SectionWrapper component { parent tag } are considered to be children */
    )
    }
