
import React from 'react'
import cloudinary from 'cloudinary'
import {ForceRefresh} from "@/components/forceRefresh"
import FavoritesList from './favoritesList'


 export type SearchResults = {
    public_id:"string"
    tags:"string"
}

const page = async () => {
     
    const results =( await cloudinary.v2.search
  .expression("resource_type:image AND tags=favorite ")
  .sort_by("created_at","desc")
  .with_field("tags")
  .max_results(30)
  .execute()) as { resources: SearchResults[]}




    return (
        <section>
          <ForceRefresh/>
            <div className=''>
                <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>
                    
                  Favorites Images
                </h1>
              
                </div>
                <FavoritesList
                initialResources={results.resources}




                />

        
          </div>
   </section>
  )
}

export default page