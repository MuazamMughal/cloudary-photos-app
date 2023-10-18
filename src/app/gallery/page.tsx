
import React from 'react'
import UploadButton from './UploadButton'
import cloudinary from 'cloudinary'
import GalleryGrid from './gallerygrid'

export type SearchResults = {
  public_id: "string"
  tags: "string"
}

const page = async () => {

  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResults[] }

  const MAX_COLUMNS = 4

  function getColumns(colIndex: number) {
    return results.resources.filter((resource, idx) =>
      idx % MAX_COLUMNS === colIndex
    )
  }

  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>

            Gallery
          </h1>
          <UploadButton />
        </div>
        <GalleryGrid images={results.resources}
        />

      </div>

    </section>
  )
}

export default page