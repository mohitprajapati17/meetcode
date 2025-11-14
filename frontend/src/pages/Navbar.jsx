import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router'
import { SparklesIcon } from 'lucide-react'
import { SignInButton } from '@clerk/clerk-react'
import { ArrowRightIcon } from 'lucide-react'
import { LayoutDashboardIcon } from 'lucide-react'
import { BookOpenIcon } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react'

function Navbar() {
    const location=useLocation();

    const isActive =(path)=>location.pathname===path;
  return (
    <>

        <nav className ="bg-base-100/80 backdrop-blur-md  border-b  border-primary/20 sticky top-0 z-50 shadow-lg">
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

                 <div className="flex items-center gap-1 ">
                    {/* {problems page links} */}
                    <Link to="/problems" className={`px-4 py-2.5 rounded-lg transition-all duration-300  ${isActive("/problems") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 "}`}>
                        
                        <div className="flex items-center gap-x-2.5">
                            <BookOpenIcon className="size-5" />
                            <span className="font-medium hidden sm:inline">

                            Problems
                            </span>

                        </div>
                    </Link>
                    
                    {/* {dashboard page links} */}
                    <Link to="/dashboard" className={`px-4 py-2.5 rounded-lg transition-all duration-300  ${isActive("/dashboard") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 "}`}>
                        
                        <div className="flex items-center gap-x-2.5">
                            <LayoutDashboardIcon className="size-5" />
                            <span className="font-medium hidden sm:inline">

                            Dashboard
                            </span>

                        </div>
                    </Link>
                    <UserButton/>

                 </div>

      



             </div>

        </nav>
    </>
  )
}

export default Navbar