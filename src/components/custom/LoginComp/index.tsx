"use client"

import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { SubmitHandler, useForm }  from "react-hook-form"
import userSchema, { userSchemaType } from "@/libraries/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginUser } from "@/api/user"
import { Loader2 } from "lucide-react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation"




export default function LoginComp() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm<userSchemaType>({
    resolver: zodResolver(userSchema),  defaultValues: {
      email: '',
      password: ''
    }
  })

  const router  = useRouter()

  const notify = (message: string) => {
    toast(message);
  };


  const onSubmit: SubmitHandler<userSchemaType> = async(data) => {
    try{
        const res = await loginUser(data)
        if(res.data){
          console.log('form data>>>', data)
          console.log('form data>>>', res)
          console.log('form errors>>>', errors)
           // Save to local storage
           localStorage.setItem('userData', JSON.stringify(data))
          reset({ email: '', password: '' })
          notify(res.data.message)
          router.push('/dashboard')
        }
        
    }catch(e: any){
        setError("root", {
            message: e.message
        })
       console.log('cant login>>', e)
    }
    // try {
    //   const response = await axios.post('https://edusphere-demo.onrender.com/api/auth/signin', data);
    //   console.log('Response:', response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center">Edusphere Logo here</CardTitle>
        <CardDescription className="text-center font-bold">Login in</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4 mt-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Email Address" {...register("email", { required: 'Email is required'})}   />
            </div>
            {errors.email  && (
              <div>
                <small className="text-red-600 text-center">{errors.email?.message}</small>
              </div>
            )}
            <div className="flex flex-col space-y-1.5 mt-2">
              <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" {...register("password", { required: 'Password is required' })}   />
            </div>
            {errors.password &&  (
                <div>
                    <small className="text-red-600 text-center">{errors.password?.message}</small>
                </div>
            )}
            <CardFooter  className="flex flex-col space-y-3">
                {isSubmitting ? (
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                    <Button type="submit" className="w-full" disabled={isSubmitting}>Login</Button>
                )}
            </CardFooter>
            {errors.root && (
                <div  className="flex justify-center">
                    <small className="text-red-600 text-center w-full">{errors.root?.message}</small>
                </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}