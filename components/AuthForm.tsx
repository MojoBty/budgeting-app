'use client'
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { authFormSchema } from '@/lib/utils'
import { useForm } from "react-hook-form"
import CustomInput from './ui/CustomInput'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signUp } from '@/lib/actions/user.actions'



const formSchema = authFormSchema('sign-up')

const AuthForm = ({ type } : { type : string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  

   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit (data: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      //sign up with Appwrite / create plaid token

      if (type === 'sign-up') {
        const newUser = await signUp(data)
        setUser(newUser)
      }

      if (type === 'sign-in') {

      
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  
  return (
    <section className='auth-form'>
      <header className='auth-header'>
        Logo: Name
        <div className='flex flex-col gap-3'>
          <h1 className='text-30 font-semibold'>
            {user ? 'Link Account' 
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
          </h1>
          <h2 className='text-20 text-gray-700'>
            {user ? 'Link your account to get started': 'Please enter your details'}
          </h2>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* Plaidlink */}
        </div>
      ): (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === 'sign-up' && (
            <>
              <div className="flex gap-4">
                <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
              </div>
              <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
              <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
              <div className="flex gap-4">
                <CustomInput control={form.control} name='state' label="State" placeholder='Example: NY' />
                <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
              </div>
              <div className="flex gap-4">
                <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
              </div>
            </>
          )}

          <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />

          <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />

          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {type === 'sign-in' 
                ? 'Sign In' : 'Sign Up'}
            </Button>
            <span className='flex'>already have an account? sign in</span>
          </div>
          
        </form>
      </Form>
    )}
    </section>
  )
}

export default AuthForm