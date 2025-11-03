'use client'
import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface InputProps {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputProps>()

  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data)

  console.log(watch("email"))

  return (
    <div className='max-container padding-container flex justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='border inline-flex flex-col gap-6 px-4 py-5 rounded-lg my-8 xl:my-12'>
          <h1 className='text-xl font-semibold text-center mb-2'>Login</h1>
          <div>
            <label htmlFor="">email: </label>
            <input type="text"
              placeholder='email' 
              {...register('email', {
                required: "email is required",
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "this must be an valid email" }
              })}
              className='border rounded px-2 py-1' />
            {errors.email && <div className='text-xs text-red-600'>{errors.email?.message}</div>}
          </div>
          <div>
            <label htmlFor="">password: </label>
            <input type="password"
              placeholder='password'
              {...register('password', {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 character" }
              })}
              className='border rounded px-2 py-1' />
            {errors.password && <div className='text-xs text-red-500'>{errors.password?.message}</div>}
          </div>
          <div>
            <button type='submit' className='bg-blue-700 text-white px-4 py-1.5 rounded cursor-pointer hover:bg-blue-800'>submit</button>
          </div>

          <div>
            <p className='text-sm text-end' >Don't have an account? <Link href={"/register"} className='underline font-semibold'>Register</Link></p>
          </div>
        </form>
    </div>
  )
}

export default Login