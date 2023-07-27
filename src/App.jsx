import './App.css';
import Authenticate from './folder/Authenticate';
import SignUpForm from './folder/SignUpForm';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  )
}


