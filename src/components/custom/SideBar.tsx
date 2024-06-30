import React from 'react'
import UserItem from './UserItem'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function SideBar() {

  const dashBoardMenus = [
     {
       group: 'Suggestions',
       items: [
         {
           path: '/dashboard',
           name: 'Calendar',
           icon: <Calendar  className="mr-2 h-4 w-4" />
         },
         {
          path: '/dashboard',
          name: 'Search Emojis',
          icon: <Smile  className="mr-2 h-4 w-4" />
        },
        {
          path: '/dashboard',
          name: 'Calculator',
          icon: <Calculator  className="mr-2 h-4 w-4" />
        },
       ]
     },

     {
      group: 'Settings',
      items: [
        {
          path: '/dashboard',
          name: 'Profile',
          icon: <User  className="mr-2 h-4 w-4" />
        },
        {
         path: '/dashboard',
         name: 'Billings',
         icon: <CreditCard  className="mr-2 h-4 w-4" />
       },
       {
         path: '/dashboard',
         name: 'Settings',
         icon: <Settings  className="mr-2 h-4 w-4" />
       },
      ]
     },
  ]



  return (
    <div className=' flex gap-4 flex-col min-h-screen p-4 border-r  min-w-[300px]'>
        {/* SideBar */}
        <div className=''>
          <UserItem />
        </div>
        <div className='grow'>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {dashBoardMenus.map((dashBoardMenu:any, key:any) => (
                   <>
                    <CommandSeparator />
                    <CommandGroup heading={dashBoardMenu.group} key={key}>
                      {dashBoardMenu.items.map((item:any,  optionKey:any) => (
                          <>
                            <CommandItem key={optionKey} className='cursor-pointer'>
                              {item.icon}
                              <span>{item.name}</span>
                            </CommandItem>
                          </>
                      ))}
                    </CommandGroup>
                   </>
                ))}
            </CommandList>
          </Command>
        </div>
        {/* <div>Settings/Notification</div> */}
    </div>
  )
}
