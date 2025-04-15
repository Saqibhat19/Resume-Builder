import React from 'react'

function MePage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          My Resumes
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
          Manage, share, and download your resumes
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Resume 1
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Template: Modern, Created: July 16, 2024
                  </p>
                </div>
                <div className="space-x-4">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                    Share
                  </button>
                  <button className="text-green-600 dark:text-green-400 hover:text-green-800">
                    Download
                  </button>
                  <button className="text-red-600 dark:text-red-400 hover:text-red-800">
                    Delete
                  </button>
                </div>
              </div>
            </li>
            {/* Add more resume list items here */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MePage
