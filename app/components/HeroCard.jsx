import Image from 'next/image'
import React from 'react'

const HeroCard = ({props}) => {
  return (
    <div id="hero-engineering" onClick="#engineering" className='relative group w-[340px] h-[220px] bg-white  '>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden  '>
          <Image className='   group-hover:scale-110 transform transition duration-150' src={props.image} fill objectFit='fill' />
        </div>
        <div className='absolute w-full h-full  bg-slate-800 bg-opacity-50 hidden group-hover:block'>
        </div>

        <div className='absolute bottom-0 left-0 w-full    text-myYellow bg-myBackground bg-opacity-70 group-hover:bg-myYellow group-hover:text-myBackground transform transition duration-150 p-4'>
          <h2 className='text-lg  font-semi-bold'>{props.title}</h2>
        </div>
    </div>
  )
}

export default HeroCard