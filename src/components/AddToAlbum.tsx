

import { Button } from "@/components/ui/button"
import {Album } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { SearchResults } from "@/app/gallery/page"
import { AddImagetoAlbum } from "./apiaction"



export   function AddToAlbum({image}:{image:SearchResults}) {

const  [AlbumName, setAlbumName] = useState("")
const [open, setOpen] = useState(false)
  return (
    <div className=" shadow-2xl">
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger  >
        <Button  >
        <Album className="mr-2 h-4 w-4 fill-slate-500" />
              <span className="font-extrabold text-lg">Add to Album</span>
            </Button>
      </DialogTrigger>
      <DialogContent className=" bg-zinc-900 border-gray-600 border-4  gsm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-2xl"> Add To Album</DialogTitle>
          <DialogDescription>
            Add an an Album u want your Image into(*-*)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
            onChange={(e)=>setAlbumName(e.currentTarget.value)}
              id="album-name"
             value={AlbumName}
              className="col-span-3 rounded-xl border-gray-700"
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button className=" hover:bg-slate-800 bg-gray-700 w-24 rounded-2xl"
            type="submit"
            onClick={async()=>{
                setOpen(false)
                await AddImagetoAlbum(image ,AlbumName)
            }}

          >Add</Button>
        
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
