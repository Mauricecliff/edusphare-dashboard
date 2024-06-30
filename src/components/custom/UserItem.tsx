import React from 'react'

export default function UserItem() {
  return (
    <div className='flex justify-between gap-3 border rounded-[8px] p-2'>
        <div className='bg-blue-400 rounded-full min-h-10 min-w-10 flex items-center justify-center cursor-pointer font-[700] text-white'>
            MC
        </div>
        <div className='grow'>
        <p className='font-bold text-[16px]'>Mauricecliff</p>
        <p className='text-neutral-500 text-[12px]'>CoderzDen@gmail.com</p>
        </div>
    </div>
    
  )
}
