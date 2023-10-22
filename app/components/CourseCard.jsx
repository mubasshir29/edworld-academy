import Image from 'next/image'
import React from 'react'
import { AiFillStar } from "react-icons/ai";


const CourseCard = ({props}) => {
    const {course} = props
  return (
    <div className='bg-black rounded-lg flex h-[180px] overflow-hidden'>
        <div className='relative w-[240px] h-[200px]'>
            <Image src={course.courseThumbnail} fill className='absolute object-cover' ></Image>
        </div>
        
        <div className='p-6 text-white flex flex-col space-y-1'>
            <h2 className=' font-bold text-xl'>{course.courseTitle}</h2>
            <p className=' text-sm'>{course.courseDescription}</p>
            <p className='text-sm pt-2'>By {course.courseCreator.name}</p>
            <div className='flex space-x-3 text-xs'>
                <p className='flex items-center gap-1'>{course.courseRating} <span className='text-sm'><AiFillStar/></span></p>
                <p>({course.courseRatingCount} ratings)</p>
            </div>
            <p className='text-xs'>{course.courseDuration}</p>
        </div>
        
    </div>
  )
}

export default CourseCard