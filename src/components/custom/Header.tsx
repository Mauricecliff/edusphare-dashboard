"use client"


import React, { useState } from 'react'
import { CommandDemo } from './HeaderItems'
import { Button } from '../ui/button'
import { 
    BellIcon,  
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users, } from 'lucide-react'
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

export default function Header() {

    const [notifications, setNotifications] = useState<any>([
        {
            text: 'This is a notification',
            date: '02-06-2024',
            read: true
        },
        {
            text: 'This is a notification',
            date: '02-07-2024',
            read: false
        },
    ])

    const isNotification = notifications.find((notification:any) => {
        return notification.read === true
    })

    console.log(isNotification)
  return (
    <div className='grid grid-cols-2 gap-4 p-4 border-r  border-b mb-3'>
        <CommandDemo />
        <div className='flex items-center justify-end'>
          <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="relative" variant="outline" size="icon" >
                        <BellIcon className='h-4 w-4' />
                        <div className={`absolute -top-1 -right-2 h-3 w-3 rounded-full ${isNotification.read ? 'bg-green-500' : 'bg-neutral-200'}`}>
                        </div>
                    </Button>      
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    {notifications.map((notification:any, key:number) => (
                         <>
                           <DropdownMenuItem key={key} className='py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex gap-2 items-start'>
                              <div className={`h-3 w-3 rounded-full ${!notification.read ? 'bg-green-500' : 'bg-neutral-200'}`}>
                              </div>
                              <div>
                                <p>{notification.text}</p>
                                <p>{notification.read ? 'read' : 'unread'}</p>
                                <p className='text-neutral-400'>{notification.date}</p>
                               </div>
                            </DropdownMenuItem>
                         </>   
                    ))}
                </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </div>
  )
}
