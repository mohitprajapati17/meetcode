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
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import ProblemsPage from './pages/ProblemsPage'
import ProblemPage from './pages/ProblemPage'
import SessionPage from './pages/SessionPage'

function App() {

  const { isLoaded, isSignedIn } = useUser();

  // Fix: Don't render routes until Clerk finishes loading
  if (!isLoaded) return null;
  return (
    <>
    <Routes>

      <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />} />
      <Route path="/" element={ <HomePage />} />
      <Route path="/dashboard" element={isSignedIn? <Dashboard/> :<Navigate to="/" />} />
      <Route path="/problems/:id" element={isSignedIn? <ProblemPage/> :<Navigate to="/"/>}/>
      <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />


      
    </Routes>
    <Toaster />

      
    </>
  )
}

export default App
