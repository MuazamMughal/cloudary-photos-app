import { MenuIcon } from "./ui/icons/MenuIcon"

import { User,Album } from "lucide-react"
 import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { AddToAlbum } from "./AddToAlbum"
import { SearchResults } from "@/app/gallery/page"

  
  export function ImageMenu({image}:{image:SearchResults} ) {
    return (
        <div className=" absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className=  "  w-8 h-8 p-0"><MenuIcon/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className= " rounded-full border-4  hover:bg-slate-900 border-gray-700 bg-black w-56">
   
            <DropdownMenuItem  asChild>
            <AddToAlbum
            image={image}
            />
            </DropdownMenuItem>
           
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  