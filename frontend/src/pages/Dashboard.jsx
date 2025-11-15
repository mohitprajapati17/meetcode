import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { useNavigate } from 'react-router';
import { useActiveSessions, useCreateSession, useMyRecentSessions } from '../hooks/useSession';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import WelcomeSection from '../components/WelcomeSection';
import ActiveSessions from '../components/ActiveSessions';
import StatsCards from '../components/StatsCards';
import RecentSessions from '../components/RecentSessions';
import CreateSessionModal from '../components/CreateSessionModal';
function Dashboard() {

  const navigate =useNavigate();
  const {user}=useUser();
  const [showCreateModal ,  setShowCreateModal]=useState(false)
  const [roomConfig, setRoomConfig]=useState({problem:  "",difficulty:""})
  const createSessionMutation=useCreateSession();
  console.log("room config",roomConfig);

  const {data :activeSessionsData, isLoading:loadingActiveSessions}=useActiveSessions();
  const {data:recentSessionData,isLoading:loadingRecentSessions}=useMyRecentSessions();

  const handleCreateRoom=()=>{
    if(!roomConfig.problem||!roomConfig.difficulty){
      console.log("returning")
      return;
    }
    createSessionMutation.mutate({
      problem:roomConfig.problem,
      difficulty:roomConfig.difficulty.toLowerCase(),
    },
    {
      onSuccess:(data)=>{
        setShowCreateModal(false)
        navigate(`/session/${data.session._id}`)
      }
    }
  )

  }

  const activeSessions=activeSessionsData?.sessions||[];
  const recentSession=recentSessionData?.sessions||[];

  const isUserInSession=(session)=>{
    if(!user.id) return false;
    return session.host?.clerkId===user.id ||session.participant?.clerkId===user.id;
  };





  return (
    <>
      <div className="min-h-screen bg-base-300">
        <Navbar/>
        <WelcomeSection onCreateSession={()=>setShowCreateModal(true)}/>

          {/* {Grid layout} */}
          <div className="container mx-auto px-6 pb-16">
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
              <StatsCards
              activeSessionsCount ={activeSessions.length}
              recentSessionsCount={recentSession.length}
              />
              <ActiveSessions
              sessions={activeSessions}
              isLoading={loadingActiveSessions}
              isUserInSession={isUserInSession}

              
              />

            </div>
            <RecentSessions sessions={recentSession} isLoading={loadingRecentSessions}/>

          </div>

      </div>

      <CreateSessionModal
       isOpen={showCreateModal}
       onClose={()=>setShowCreateModal(false)}
       roomConfig={roomConfig}
       setRoomConfig={setRoomConfig}
       onCreateRoom={handleCreateRoom}
       isCreating={createSessionMutation.isPending}
      />
    </>
  )
}

export default Dashboard