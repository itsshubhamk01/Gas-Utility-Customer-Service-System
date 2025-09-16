import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App(){
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if(token){
      axios.get('/api/customers/', { headers: { Authorization: 'Bearer '+token } })
        .then(res=> setUser({id: res.data[0]?.id, username: res.data[0]?.username}))
        .catch(err=> console.log(err));
    }
  }, [token]);

  if(!token) return <Login onLogin={t=> { localStorage.setItem('token', t); setToken(t); }} />

  return <Dashboard token={token} onLogout={()=>{localStorage.removeItem('token'); setToken(null);}} />
}

export default App;
