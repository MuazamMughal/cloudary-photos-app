"use client"
import React, { useEffect, useState } from 'react'
import CloudImage from "@/app/gallery/CloudImage"
import { ImageGrid } from '@/components/ImageGrid'



export type SearchResults = {
    public_id: "string"
    tags: "string"
}

export default function FavoritesList(
    { initialResources
    }: {
        initialResources: SearchResults[]
    }) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])

    return (


        <div className=' mt-12 '>
            <ImageGrid
                images={resources}
                getImage={(imageData: SearchResults) => {

                    return (
                        <CloudImage

                            key={imageData.public_id}
                            imageData={imageData}
                            width="600"
                            height="300"
                            alt='this is the image of the anything'
                            onUnheart={(UnheartedResource) => {
                                setResources((currentResources) =>
                                    currentResources.filter(
                                        (resource) => resource.public_id !== UnheartedResource.public_id
                                    ))
                            }}


                        />
                    )

                }}
            />
         
        </div>

    )
}

