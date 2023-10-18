"use client"

import Heart from "@/components/ui/icons/Heart"
import { CldImage, CldImageProps } from 'next-cloudinary'
import cloudinary from 'cloudinary'
import { setAsFavAction } from "@/app/gallery/actions"
import {useTransition ,useState} from "react"
import { SearchResults } from "@/app/favorites/page"
import FullHeart from "@/components/ui/icons/FullHeart"
import { ImageMenu } from "@/components/ImageMenu"





export default function cloudImage(
  props:
   {imageData :SearchResults; 
    
    onUnheart?:(UnheartedResource : SearchResults)=>void

  } & Omit< CldImageProps ,"src">
  )
   
  {
  const [transition , startTransition]=useTransition()

  const {imageData , onUnheart} =props

  const [isFavorited , setIsFavorited] =useState(
             imageData.tags.includes("favorite"))
  


  
  return (
    <div className=" relative">
      <CldImage {...props} src={imageData.public_id} />
{
  isFavorited ? (
   <FullHeart

  onClick={() => {
    onUnheart?.(imageData)
    setIsFavorited(false)
    startTransition(() => {
      setAsFavAction(imageData.public_id ,false )

    })
  }}
  className=" absolute top-2 left-2 hover:text-white  text-red-800 cursor-pointer"
  />
  ) :(

      <Heart

        onClick={() => {
          setIsFavorited(true)
          startTransition(() => {
            setAsFavAction(imageData.public_id ,true)

          })
        }}
        className=" absolute top-2 left-2 hover:text-red-800 cursor-pointer"
        />
 )
}
<ImageMenu image={imageData}/>
    </div>


  )
}