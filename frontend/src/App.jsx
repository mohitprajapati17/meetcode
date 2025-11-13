import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedOut, SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { useUser } from '@clerk/clerk-react'
import Problems from './pages/Problems'
import { Navigate } from 'react-router'
function App() {
  
const {isSignedIn}=useUser();
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problems" element={isSignedIn ? <Problems /> : <Navigate to="/sign-in" />} />
      
    </Routes>
    <Toaster />

      
    </>
  )
}

export default App
