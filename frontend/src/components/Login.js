import React, { useState } from 'react';
import axios from 'axios';

export default function Login({onLogin}){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const submit = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('/api/auth/token/', { username, password });
      onLogin(res.data.access);
    }catch(err){
      alert('Login failed. Create a superuser in backend and use those credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4">Gas Utility - Login</h2>
        <form onSubmit={submit}>
          <input className="w-full p-2 border mb-2" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} />
          <input className="w-full p-2 border mb-2" placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full p-2 bg-blue-600 text-white">Login</button>
        </form>
      </div>
    </div>
  );
}
