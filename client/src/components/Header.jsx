import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
   
    return (
        <>
            <div className='bg-teal-700 ' >
                <div className='flex justify-between items-center max-w-6xl mx-auto p-3 h-20'>
                    <Link to='/' >
                        <h1 className='font-bold text-teal-100 text-xl'>Authentication</h1>
                    </Link>

                    <ul className='flex space-x-4 text-teal-100 text-base '>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='signin'>
                            <li >SignIn</li>
                        </Link>
                        <Link to='signup'>
                            <li >SignUp</li>
                        </Link>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header