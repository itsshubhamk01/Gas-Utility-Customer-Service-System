import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceRequestForm from './ServiceRequestForm';

export default function Dashboard({token, onLogout}){
  const [requests, setRequests] = useState([]);

  useEffect(()=>{
    axios.get('/api/service-requests/', { headers: { Authorization: 'Bearer '+token } })
      .then(res=> setRequests(res.data))
      .catch(err=> console.log(err));
  }, [token]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Customer Dashboard</h1>
        <div>
          <button className="px-3 py-1 bg-red-500 text-white mr-2" onClick={onLogout}>Logout</button>
        </div>
      </div>
      <ServiceRequestForm token={token} onCreated={sr=> setRequests([sr, ...requests])} />
      <div className="mt-6">
        <h2 className="text-xl mb-2">Your Service Requests</h2>
        <ul>
          {requests.map(r=> (
            <li key={r.id} className="bg-white p-3 rounded mb-2">
              <strong>{r.title}</strong>
              <p>{r.description}</p>
              <small>Status: {r.status}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
