"use client"


import General from '@/components/custom/Cards/General'
import Header from '@/components/custom/Header'
import SideBar from '@/components/custom/SideBar'
import React, { useEffect, useState } from 'react'

export default function DashboardView() {
  

  return (
    <div className='flex items-start justify-between'>
        <SideBar />
       <div className="w-full h-full">
            <Header />
            <General />
       </div>
    </div>
  )
}





// <body className={`${inter.className} flex items-start justify-between`}>
//         <SideBar />
//         <main className="w-full h-full">
//         <Header />
//         {children}
//         </main>
//         </body>