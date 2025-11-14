import React from 'react'
import { Link } from 'react-router'
import { SparklesIcon } from 'lucide-react'
import { SignInButton } from '@clerk/clerk-react'
import { ArrowRightIcon } from 'lucide-react'
import { SignedOut, SignedIn, SignOutButton, UserButton } from '@clerk/clerk-react'
import { toast } from 'react-hot-toast'
import { ZapIcon } from 'lucide-react'
import { CheckIcon } from 'lucide-react'
import { VideoIcon } from 'lucide-react'
import { CodeIcon } from 'lucide-react'
import { LanguagesIcon } from 'lucide-react'
import { BrainIcon } from 'lucide-react'
import { UsersIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useUser } from '@clerk/clerk-react'






function HomePage() {
    const navigate =useNavigate();
  const { isLoaded, isSignedIn } = useUser();

  // Fix: Don't render routes until Clerk finishes loading
  if (!isLoaded) return null;
  return (
    <div  className ="bg-gradient-to-br  from-base-100 via-base-200 to-base-300">

        {/* {Navbar} */}
        <nav className ="bg-base-100/80 backdrop-blur-md  border-b border-b border-primary/20 sticky top-0 z-50 shadow-lg">
             <div className ="max-w-7xl mx-auto p-4 flex items-center justify-between">
                {/* {Logo} */}
                <Link
                to="/"
                className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                >
                    <div className ="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                        <SparklesIcon  className="text-white size-6"/>

                    </div>
                    <div className ="flex flex-col">
                        <span className ="font-black text-xl  bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono  tracking-wider">
                            MeetCode

                        </span>
                        <span className ="text-xs text-base-content/60 font-medium ">The Ultimate Coding Interview Platform</span>

                    </div>
                
                </Link>

                {/* {Auth Buttons} */}
                {!isSignedIn?(
                    <SignInButton mode="modal" >
                    <button className="group  px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                        
                        <span>
                            Get  Started
                        </span>
                        <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform duration-300"/>


                    </button>
                </SignInButton>
                ):(
                    <button className="group  px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2" onClick={()=>{navigate("/dashboard")}}>
                        
                        <span>
                            Dashboard
                        </span>
                        <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform duration-300"/>


                    </button>
                )}
                

      



             </div>

        </nav>

        {/* {Hero Section} */}
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div  className="grid lg:grid-cols-2 items-center gap-12">
                {/* {Left Side} */}
                <div className="space-y-8">
                    <div className ="badge badge-primary  badge-lg">
                        <ZapIcon className="size-4" />
                        Real Time Collaboration
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            Code Together ,

                        </span>
                        <br/>
                        <span className="text-base-content"> Learn Together</span>

                    </h1>

                    <p className="text-xl text-base-content/70 max-w-xl leading-relaxed">
                    The Ultimate Coding Interview Platform for Developers to Practice, Collaborate, and Ace Their Interviews.
                    Connect face to  face , code real  time , ace your  interviews
                    </p>
                    {/* {features  pills} */}
                    <div className ="flex flex-wrap gap-3">
                        <div className ="badge  badge-lg badge-outline">
                            <CheckIcon  className="size-4 text-success" />
                            Live Video  Chat
                        </div>
                        <div className ="badge  badge-lg badge-outline">
                            <CheckIcon  className="size-4 text-success" />
                              Code Editor
                        </div>
                        <div className ="badge  badge-lg badge-outline">
                            <CheckIcon  className="size-4 text-success" />
                            Multiple Languages
                        </div>


                    </div>
                    {/* {Call to action   buttons} */}
                    <div  className="flex flex-wrap   gap-4">
                        <SignInButton mode="modal" >
                            <button className="btn btn-primary btn-lg">
                                Start Coding  Now 
                                <ArrowRightIcon className="size-5" />
                            </button>
                        </SignInButton>
                        <button className="btn btn-outline btn-lg">
                            <VideoIcon className="size-5" />
                            watch demo

                        </button>
                    </div>
                    {/* {Stats  } */}
                    <div className ="stats  stats-vertical lg:stats-horizontal   bg-base-100  shadow-lg">
                        <div className="stat">
                            <div className ="stat-value text-primary">
                                10k+
                            </div>
                            <div className ="stat-title">
                                Active Users
                            </div>
                         </div>
                         <div className="stat">
                            <div className ="stat-value text-secondary">
                                50k+
                            </div>
                            <div className ="stat-title">
                                Sessoins
                            </div>
                         </div>
                         
                         <div className="stat">
                            <div className ="stat-value text-accent">
                                +99.9%
                            </div>
                            <div className ="stat-title">
                                Uptime
                            </div>
                         </div>
                    </div>


                </div>
                {/* {Right Side} */}
               <img src="hero.png" alt="Code collab platform " className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-all duration-300" />
               

            </div>

        </div>

        {/* {Features Section} */}
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className ="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    Everything you need to <span className ="text-primary font-mono"> Succeed</span>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        powerful features design to make your coding journey easier and more efficient.
                    </p>
                </h2>

            </div>

            {/* {feature  Grid} */}
            <div className="grid  md:grid-cols-3 gap-8">
                {/* {feature 1} */}
                <div className ="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div  className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                             <VideoIcon className="size-8 text-primary" />

                        </div>
                        <h3 className="card-title "> 
                            Live Video Chat
                        </h3>
                        <p className="text-base-content/70">
                           crystal clear video and audio quality for seamless communication.

                        </p>

                    </div>

                </div>

                {/* {feature 2} */}
                <div className ="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div  className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                             <CodeIcon className="size-8 text-primary" />

                        </div>
                        <h3 className="card-title "> 
                            Live Code Editor
                        </h3>
                        <p className="text-base-content/70">
                           crystal clear video and audio quality for seamless communication.

                        </p>

                    </div>

                </div>

                {/* {feature 3} */}
                <div className ="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div  className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                             <UsersIcon className="size-8 text-primary" />

                        </div>
                        <h3 className="card-title "> 
                            Live Video Chat
                        </h3>
                        <p className="text-base-content/70">
                           crystal clear video and audio quality for seamless communication.

                        </p>

                    </div>

                </div>

            </div>


        </div>



    </div>
  )
}

export default HomePage