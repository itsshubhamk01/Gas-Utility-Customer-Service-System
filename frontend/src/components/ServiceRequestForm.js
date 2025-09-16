import React, { useState } from 'react';
import axios from 'axios';

export default function ServiceRequestForm({token, onCreated}){
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');

  const submit = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('/api/service-requests/', { title, description: desc }, { headers: { Authorization: 'Bearer '+token } });
      onCreated(res.data);
      setTitle(''); setDesc('');
    }catch(err){
      alert('Error creating request. Ensure backend is running and token is valid.');
    }
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded">
      <h3 className="text-lg mb-2">Create Service Request</h3>
      <input className="w-full p-2 border mb-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="w-full p-2 border mb-2" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
      <button className="px-3 py-1 bg-green-600 text-white">Create</button>
    </form>
  );
}
