import { Button } from '@material-tailwind/react'
import React from 'react'

export default function CardDesign({title,content}) {
  return (
    <div className='shadow  mt-12'>
        <div className='p-4 flex justify-between items-center  bg-amber-50  rounded-md'>
        <h1 className='text-lg capitalize font-medium'>{title}</h1>
        
        </div>
        <div className='p-4'>
            {content}
        </div>
    </div>
  )
}



