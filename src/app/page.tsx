"use client"
import { CldImage, CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'

export type UploadResults = {
    event :"success",
   info:{
    public_id:string
   },

  }



export default function Home() {
  const [imageId,setImageId ]=useState("")
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <CldUploadButton
       onUpload={(result)=>{
        setImageId((result as UploadResults).info.public_id)
      }}
      uploadPreset="testing" 
      />
        {imageId &&(
      <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
       

        
      />
        )}

    </main>
  )
}
