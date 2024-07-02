
import React from 'react'
import LoginComp from '@/components/custom/LoginComp'


export default function LoginView() {
    return (
        <div className="flex justify-center">
        <div className="login justify-center items-center hidden md:flex">
            <img src="./d-image.png" alt="display-image" />
        </div>
        <div className='w-[100%] md:w-[50%] px-5 mt-5 flex justify-center items-center'>
          <LoginComp />
        </div>     
    </div>
    )
  }