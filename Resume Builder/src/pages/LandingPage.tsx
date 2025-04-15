import React from 'react'
import { Link } from 'react-router-dom'
import { Github, RefreshCw, Share2, FileCheck } from 'lucide-react'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your GitHub Projects, Your Resume
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Create a professional resume that automatically updates with your latest GitHub projects
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose ResumeHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                GitHub Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seamlessly import and showcase your best GitHub projects in your resume
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Auto Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your resume automatically updates monthly with your latest projects
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Easy Sharing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your resume with a simple link that's always up to date
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Create Your Dynamic Resume?
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Join thousands of developers who trust ResumeHub for their professional profiles
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
