import React from 'react'

const Contact = () => {
  return (
    <div className='w-full p-12 flex'>
        <div className=' flex-1  flex justify-center items-center '>
            <div className='w-[80%] h-full flex flex-col gap-6 justify-center items-center border-2 rounded-xl border-myYellow'>
                <h2 className='text-myYellow text-3xl font-bold'>Become a member</h2>
                <button className='bg-myYellow px-4 py-2 rounded-md text-white'>Join Us</button>
            </div>
            
        </div>
        <div className='flex-1 flex justify-center'>
            <div className='w-[80%] flex flex-col gap-6 py-8 px-16 border-2 rounded-xl border-myYellow'>
                <h3 className='text-myYellow text-3xl font-bold text-center'>Contact Us</h3>
                <form className='flex flex-col gap-3 text-white '>
                        <input className='w-full focus:outline-none py-4 px-0 bg-transparent outline-b- border-b-2 border-myYellow ' placeholder='First name' type='text'></input>
                        <input className='w-full focus:outline-none py-4 px-0 bg-transparent outline-b- border-b-2 border-myYellow ' placeholder='Last name' type='text'></input>
                        <input className='w-full focus:outline-none py-4 px-0 bg-transparent outline-b- border-b-2 border-myYellow ' placeholder='Email' type='text'></input>
                        <input className='w-full focus:outline-none py-4 px-0 bg-transparent outline-b- border-b-2 border-myYellow ' placeholder='Mobile' type='text'></input>
                        <textarea className='w-full focus:outline-none py-4 px-0 bg-transparent outline-b- border-b-2 border-myYellow resize-none' placeholder='Message'  ></textarea>
                        <button className='bg-myYellow px-4 py-2 mt-4 rounded-md'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact