import React from 'react'
import Courses from'@/app/sampleCourseData.json'
import CourseCard from '../components/CourseCard'

const page = () => {
  return (
    <div className='w-[1320px] mx-auto flex gap-4'>
        <div className='w-[320px] p-6 '>
            <div className='bg-black rounded-lg p-4'>
            <h1 className='text-white'>Hello</h1>
            </div>
        </div>
        <div className='flex flex-col gap-6 py-6'>
            {Courses && Courses.map(course => <CourseCard props={{course}} />)}

        </div>
    </div>
  )
}

export default page