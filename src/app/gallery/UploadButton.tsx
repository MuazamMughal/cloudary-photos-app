"use client"
import { Button } from '@/components/ui/button'
import { CldUploadButton } from 'next-cloudinary'
import React from 'react'
import { UploadResults } from '../page'
import { useRouter } from 'next/navigation'


const UploadButton = () => {

const router = useRouter()

  return (
    <div>
        
        
        <Button className=' text-black font-bold  hover:text-white hover:bg-slate-800 rounded-xl bg-slate-100 text-lg' asChild>
                  <div className=' flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>

                    <CldUploadButton

                        onUpload={(result) => {
                            // setImageId((result as UploadResults).info.public_id)
                           setTimeout(()=>{
                             router.refresh()
                           },1000)
                           
                       
                          }}
                        uploadPreset="testing"
                    />
                    
                    </div>
              </Button>




    </div>
  )
}

export default UploadButton