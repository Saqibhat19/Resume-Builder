import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Github, Loader2, Check, Calendar, MapPin, Phone, Mail, Linkedin, GraduationCap, Building } from 'lucide-react'

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
}

interface PersonalDetails {
  name: string
  city: string
  phone: string
  email: string
  linkedin: string
}

interface CollegeDetails {
  name: string
  location: string
  gpa: string
  startDate: string
  endDate: string
}

function CreatePage() {
  const [profileUrl, setProfileUrl] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedRepos, setSelectedRepos] = useState<Repository[]>([])
  
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    name: '',
    city: '',
    phone: '',
    email: '',
    linkedin: ''
  })

  const [collegeDetails, setCollegeDetails] = useState<CollegeDetails>({
    name: '',
    location: '',
    gpa: '',
    startDate: '',
    endDate: ''
  })

  const navigate = useNavigate()

  const handlePersonalDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPersonalDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCollegeDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCollegeDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const extractUsername = (url: string) => {
    const match = url.match(/github\.com\/([^/]+)/)
    return match ? match[1] : null
  }

  const fetchRepositories = async (e: React.FormEvent) => {
    e.preventDefault()
    const username = extractUsername(profileUrl)
    
    if (!username) {
      setError('Please enter a valid GitHub profile URL')
      return
    }

    setLoading(true)
    setError('')
    setRepositories([])
    setFilteredRepos([])
    setSelectedRepos([])

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      if (!response.ok) throw new Error('Failed to fetch repositories')
      
      const data = await response.json()
      setRepositories(data)
      setFilteredRepos(data)
    } catch (err) {
      setError('Failed to fetch repositories. Please check the profile URL and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    setFilteredRepos(
      repositories.filter(repo => 
        repo.name.toLowerCase().includes(term) || 
        (repo.description?.toLowerCase() || '').includes(term)
      )
    )
  }

  const toggleRepoSelection = (repo: Repository) => {
    setSelectedRepos(prev => {
      const isSelected = prev.some(r => r.id === repo.id)
      if (isSelected) {
        return prev.filter(r => r.id !== repo.id)
      } else if (prev.length < 3) {
        return [...prev, repo]
      }
      return prev
    })
  }

  const isRepoSelected = (repo: Repository) => {
    return selectedRepos.some(r => r.id === repo.id)
  }

  const handleSubmit = () => {
    // Placeholder for form submission logic
    navigate('/templates')
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Your Profile
          </h1>
          <p className="mt-2 text-gray-600">
            Fill in your details and select your best repositories
          </p>
        </div>

        {/* Personal Details Section */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Building className="h-5 w-5" />
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={personalDetails.name}
                  onChange={handlePersonalDetailsChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    value={personalDetails.city}
                    onChange={handlePersonalDetailsChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="New York"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={personalDetails.phone}
                    onChange={handlePersonalDetailsChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={personalDetails.email}
                    onChange={handlePersonalDetailsChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn Profile
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    name="linkedin"
                    value={personalDetails.linkedin}
                    onChange={handlePersonalDetailsChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* College Details Section */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              College Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={collegeDetails.name}
                  onChange={handleCollegeDetailsChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="University of Technology"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={collegeDetails.location}
                    onChange={handleCollegeDetailsChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="New York, USA"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GPA
                </label>
                <input
                  type="text"
                  name="gpa"
                  value={collegeDetails.gpa}
                  onChange={handleCollegeDetailsChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="3.8"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="startDate"
                      value={collegeDetails.startDate}
                      onChange={handleCollegeDetailsChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="endDate"
                      value={collegeDetails.endDate}
                      onChange={handleCollegeDetailsChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Repositories Section */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub Repositories
            </h2>
            <form onSubmit={fetchRepositories} className="mb-8">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  placeholder="https://github.com/username"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    'Fetch Repositories'
                  )}
                </button>
              </div>
            </form>

            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            {selectedRepos.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Selected Repositories ({selectedRepos.length}/3)
                </h2>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {selectedRepos.map(repo => (
                      <li key={repo.id} className="p-4 bg-blue-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {repo.name}
                            </h3>
                            {repo.description && (
                              <p className="mt-1 text-gray-600">{repo.description}</p>
                            )}
                          </div>
                          <button
                            onClick={() => toggleRepoSelection(repo)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {repositories.length > 0 && (
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search repositories..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {filteredRepos.map(repo => {
                      const selected = isRepoSelected(repo)
                      const canSelect = selectedRepos.length < 3 || selected
                      
                      return (
                        <li 
                          key={repo.id}
                          onClick={() => canSelect && toggleRepoSelection(repo)}
                          className={`p-4 transition-colors ${
                            selected 
                              ? 'bg-blue-50 hover:bg-blue-100' 
                              : canSelect 
                                ? 'hover:bg-gray-50 cursor-pointer' 
                                : 'opacity-50 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-medium text-gray-900">
                                  {repo.name}
                                </h3>
                                {selected && (
                                  <Check className="h-5 w-5 text-green-500" />
                                )}
                              </div>
                              {repo.description && (
                                <p className="mt-1 text-gray-600">{repo.description}</p>
                              )}
                              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                                {repo.language && (
                                  <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    {repo.language}
                                  </span>
                                )}
                                <span className="flex items-center gap-1">
                                  ⭐ {repo.stargazers_count}
                                </span>
                              </div>
                            </div>
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 ml-4"
                              onClick={e => e.stopPropagation()}
                            >
                              View on GitHub
                            </a>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
        >
          Create Resume
        </button>
      </div>
    </div>
  )
}

export default CreatePage
