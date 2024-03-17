import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form action="#" className='flex flex-col gap-5'>
        <input type="text" id="username" placeholder='Username' className='bg-slate-200 p-3 rounded-lg' />
        <input type="email" id="email" placeholder='Email' className='bg-slate-200 p-3 rounded-lg' />
        <input type="password" id="password" placeholder='Password' className='bg-slate-200 p-3 rounded-lg' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>sign Up</button>
      </form>
      <div className="flex gap-3 mt-4">
        <p>Already have an account ?</p>
        <Link to= '/signIn'>
        <span className="text-blue-600">Sign In</span>
        </Link>
      </div>
    </div>

  )
}

export default SignUp