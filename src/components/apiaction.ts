"use server"
import { SearchResults } from "@/app/gallery/page"
import cloudinary from "cloudinary"


export async function AddImagetoAlbum( image:SearchResults,album:string ){
     await cloudinary.v2.api.create_folder(album)
 
     await cloudinary.v2.uploader.rename(
        image.public_id,
        `${album}/${image.public_id}`
     )


    
}