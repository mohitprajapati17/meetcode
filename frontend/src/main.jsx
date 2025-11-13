import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

   if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
  }
  const queryClient=new QueryClient();
createRoot(document.getElementById('root')).render(

  

  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
    </QueryClientProvider>
    </BrowserRouter>
  </ClerkProvider>
)
