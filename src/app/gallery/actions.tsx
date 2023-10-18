//making the functins there for set as favorite action
//before this we got to the next.config.js >then  experimental:{serverActions:true}

"use server"

import cloudinary from 'cloudinary'


export async function  setAsFavAction(
    publicId:string,
    isFavorite:boolean,
    
    ) {
        if (isFavorite) {
             await cloudinary.v2.uploader.add_tag("favorite", [publicId])
        }else{
            await cloudinary.v2.uploader.remove_tag("favorite", [publicId])
        }
        await new Promise((resolve) =>setTimeout((resolve),500))
            
        
   
   


}