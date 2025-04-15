import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Github, Moon, Sun } from 'lucide-react'
import CreatePage from './pages/CreatePage'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import PricingPage from './pages/PricingPage'
import { useTheme } from './contexts/ThemeContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import TemplateSelectionPage from './pages/TemplateSelectionPage'
import MePage from './pages/MePage'

function NavBar() {
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Github className="h-6 w-6 dark:text-white" />
            <span className="font-semibold text-xl dark:text-white">ResumeHub</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {user !== null ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/create"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Resume
                </Link>
                <Link
                  to="/me"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  My Resumes
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/pricing"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  to="/auth"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/templates" element={<TemplateSelectionPage />} />
            <Route path="/me" element={<MePage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
