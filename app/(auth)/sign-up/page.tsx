import React from 'react'
import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const SignUp = async() => {
  
  return (
    <div className=''>
      <AuthForm type="sign-up" />
    </div>
  )
}

export default SignUp