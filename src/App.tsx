import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ErrorBoundary } from './components/errorBoundary'
import { HeaderComponent } from './components/header'
import { HomePage } from './pages/home'
import { SearchCityProvider } from './contexts/city'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SearchCityProvider>
        <HomePage />
      </SearchCityProvider>
    ),
  },
])

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <HeaderComponent title='Weather' />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  )
}

export default App
