import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-myYellow py-2 px-8 h-[70px]'>
        <nav className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <h1 className='relative text-myBackground font-extrabold text-3xl pt-4'>
                <p className='text-sm absolute top-0 text-text-myBackground font-bold'>Kabeer Sir's</p>
                <span className='text-white'>Ed-World</span> Academy</h1>
            </div>
            <div className='flex items-center space-x-6'>
                <ul className='flex space-x-2'>
                    <Link href='/'><li className='border cursor-pointer border-myYellow hover:bg-myBackground hover:text-myYellow  rounded-full px-4 py-2'>Home</li></Link>
                    <Link href='/courses'><li className='border cursor-pointer border-myYellow hover:bg-myBackground hover:text-myYellow  rounded-full px-4 py-2'>Courses</li></Link>
                    <Link href='/'><li className='border cursor-pointer border-myYellow hover:bg-myBackground hover:text-myYellow  rounded-full px-4 py-2'>About</li></Link>
                    <Link href='/'><li className='border cursor-pointer border-myYellow hover:bg-myBackground hover:text-myYellow  rounded-full px-4 py-2'>Blog</li></Link>
                    <Link href='/'><li className='border cursor-pointer border-myYellow hover:bg-myBackground hover:text-myYellow  rounded-full px-4 py-2'>Contact</li></Link>
                    <Link href='/'><li className='border cursor-pointer border-myYellow hover:bg-myBackground hover:text-myYellow  rounded-full px-4 py-2'>Join Us</li></Link>

                </ul>
                <button className='bg-myBackground text-white px-6 py-2 rounded-full'>Signup</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar