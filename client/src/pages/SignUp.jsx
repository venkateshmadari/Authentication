import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const submitChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;        
      }
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form onSubmit={submitForm} className='flex flex-col gap-5'>
        <input
          type="text"
          id="username"
          placeholder='Username'
          className='bg-slate-200 p-3 rounded-lg'
          onChange={submitChange}
        />
        <input
          type="email"
          id="email"
          placeholder='Email'
          className='bg-slate-200 p-3 rounded-lg'
          onChange={submitChange}
        />
        <input
          type="password"
          id="password"
          placeholder='Password'
          className='bg-slate-200 p-3 rounded-lg'
          onChange={submitChange}
        />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> {loading ? "Loading..." : "Sign Up"} </button>
      </form>
      <div className="flex gap-3 mt-4">
        <p>Already have an account?</p>
        <Link to='/signIn'>
          <span className="text-blue-600">Sign In</span>
        </Link>
      </div>
      <p className='mt-7 text-red-600'>{error && "Something went wrong"}</p>
    </div>
  );
}

export default SignUp;
