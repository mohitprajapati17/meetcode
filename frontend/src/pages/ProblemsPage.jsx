import React from 'react'
import Navbar from './navBar'
import { PROBLEMS } from '../data/problems'
import { getDifficultyColor } from '../lib/utils'
import { Link } from 'react-router'
import { ChevronRightIcon, CodeIcon } from 'lucide-react'

function ProblemsPage() {
    const problems=Object.values(PROBLEMS);
    const easyProblemscnt=problems.filter(p=>p.difficulty==="Easy").length;
    const mediumProblemscnt=problems.filter(p=>p.difficulty==="Medium").length;

    const hardProblemscnt=problems.filter(p=>p.difficulty==="Hard").length;

  return (
    <div  className="min-h-screen bg-base-200">
        <Navbar/>

        <div className="max-w-6xl mx-auto px-8 py-12">
            {/* {Header} */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">
                    Practice Problems
                </h1>
                <p className="text-base-content/70">
                    Practice coding problems to improve your skills and prepare for interviews.
                </p>
            </div>

            {/* {Problems List} */}
            <div className="space-y-4">
                {problems.map((problem)=>(
                    <Link
                    key={problem.id}
                    to={`/problems/${problem.id}`}
                    className="card bg-base-100 hover:scale-[1.01] transition-transform"
                    >
                        <div className='card-body'>
                            <div className='flex items-center justify-between gap-4'>
                                {/* {Letf Side} */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <CodeIcon className="size-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center mb-1 gap-2">
                                                <h2 className="text-xl font-bold">{problem.title}</h2>
                                                <span className={`badge ${getDifficultyColor(problem.difficulty)}`}>
                                                    {problem.difficulty}
                                                </span>

                                                

                                            </div>
                                            <div>
                                                    <p className="text-sm text-base-content/70">
                                                        {problem.category}
                                                    </p>
                                                    
                                            </div>

                                        </div>

                                    </div>
                                    <p  className='text-base-content/80 mb-3'> {problem.description.text}</p>


                                </div>

                                {/* {Right side} */}
                                <div className="flex items-center gap-2 text-primary">
                                    <span className="font-medium">
                                            Solve
                                    </span>
                                    <ChevronRightIcon className="size-5"/>

                                </div>

                            </div>

                        </div>
                    </Link>
                ))}
            </div>

            {/* {stats footer} */}
            <div className=" mt-12 card bg-base-100 shadow-lg">
                <div className="card-body">
                    <div className="stats stats-vertical lg:stats-horizontal">
                        <div className="stat">
                            <div  className="stat-title">
                                Total Problems                                
                            </div>
                            <div className="stat-value text-primary">{problems.length}
                                 
                            </div>
                            </div>


                            <div className="stat">
                            <div  className="stat-title">
                                easy problems                            
                            </div>
                            <div className="stat-value text-primary">{easyProblemscnt}
                                 
                            </div>
                            </div>



                            <div className="stat">
                            <div  className="stat-title">
                                Medium Problems                                
                            </div>
                            <div className="stat-value text-primary">{mediumProblemscnt}
                                 
                            </div>

                            
                            <div  className="stat-title">
                                hard Problems                                
                            </div>
                            <div className="stat-value text-primary">{hardProblemscnt}
                                 
                            </div>


                        </div>

                    </div>

                </div>


            </div>

        </div>
    </div>
  )
}

export default ProblemsPage