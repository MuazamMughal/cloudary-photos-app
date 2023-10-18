"use client"

import React from 'react'

import CloudImage from "@/app/gallery/CloudImage"
import { ImageGrid } from '@/components/ImageGrid'
import { SearchResults } from './page'



export default function GalleryGrid({ images }: { images: SearchResults[] }) {
    return (


        <ImageGrid
            images={images}
            getImage={(imageData: SearchResults) => {

                return (
                    <CloudImage

                        key={imageData.public_id}
                        imageData={imageData}
                        width="600"
                        height="300"
                        alt='this is the image of the anything'

                    />
                )



            }}
        />


    )
}

