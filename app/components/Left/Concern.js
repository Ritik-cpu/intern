import React from 'react'
import CardDesign from '../Design'
import { Button } from '@material-tailwind/react'


const text=['skin treatment', 'pregnancy', 'period doubt','Endometriosis','Pelvic Pain','Ovarian Cysts','Ovarian','Ovarian','overian','overian','ovvvvv' ]
export default function Concern() {
  return (
    <div>
        <CardDesign
        title={"the concerns i treat"}  
        content={
            <div>
                {text.slice(0,5).map((texti)=>{
                    return(
                        <Button
                        key={texti}
                        className="capitalize text-green-600 m-2 rounded-2xl font-medium bg-slate-100 shadow-none "
                        variant="filled"
                      >
                        {texti}
                      </Button>
                    )
                   
                })}
                 <Button
                       
                        className="capitalize text-green-600 m-2 rounded-2xl font-medium bg-slate-100 shadow-none "
                        variant="filled"
                      >
                       <strong className='font-lg font-bold'>+</strong> {text.slice(5).length } more
                      </Button>
            </div>
        } 
        />
    </div>
  )
}
