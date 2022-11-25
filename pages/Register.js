import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import {useForm} from 'react-hook-form'

const Register = () => {
  const {   
    handleSubmit,
    register,
    formState: {errors},
  } = useForm()

  const submitHandler = ({name, email, password, confirmPassword}) => {
    console.log(name, email, password)
  }
  return (
    <Layout title='Register'>
      <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
        <h1 className='mb-4 text-xl'>Register</h1>
        <div className='mb-4'>
          <label htmlFor='email'>Name</label>
          <input
            type='name'
            className='w-full'
            {...register('name', {
              required: 'Please enter name',
              pattern: {
                message: 'Please enter valid name',
              },
            })}
            id='name'
            autoFocus
          ></input>
          {errors.name && <div className='text-red-500'>{errors.name.message}</div>}
        </div>
        <div className='mb-4'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='w-full'
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            id='email'
            autoFocus
          ></input>
          {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
        </div>
        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            {...register('password', {
              required: 'Please enter password',
              minLength: {value: 6, message: 'password is more than 5 chars'},
            })}
            className='w-full'
            id='password'
            autoFocus
          ></input>
          {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
        </div>
        {/* <div className='mb-4'>
          <label htmlFor='password'>Confirm Password</label>
          <input
            type='password'
            {...register('confirmPassword', {
              required: 'Please enter confirm password',
              minLength: {value: 6, message: 'confirm password is more than 5 chars'},
            })}
            className='w-full'
            id='confirmPassword'
            autoFocus
          ></input>
          {errors.confirmPassword && (
            <div className='text-red-500'>{errors.confirmPassword.message}</div>
          )}
        </div> */}
        <div className='mb-4'>
          <button className='primary-button'>Register</button>
        </div>
        <div className='mb-4'>
          you have an account &nbsp;
          <Link href='/Login'>Login</Link>
        </div>
      </form>
    </Layout>
  )
}

export default Register
