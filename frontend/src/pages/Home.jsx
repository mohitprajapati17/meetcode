import React from 'react'
import { SignedOut, SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import { toast } from 'react-hot-toast'


function Home() {
  return (
    <>
    <button className="btn btn-primary" onClick={()=>toast.success("Signed in successfully")}>Sign in</button>

      <SignedOut>
        <SignInButton  onClick={()=>toast.success("Signed in successfully")} mode="modal" />
      </SignedOut>
      <SignedIn>
        <SignOutButton mode="modal" />
        <UserButton />
      </SignedIn></>
  )
}

export default Home