import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'

const templateImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1517694712202-14f926bb993a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Template 1'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1586282921533-87500007e44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Template 2'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1519389950473-47a04789ef1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Template 3'
  }
]

function TemplateSelectionPage() {
  const navigate = useNavigate()
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)

  const handleSubmit = () => {
    if (selectedTemplate) {
      navigate('/me')
    }
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Choose Your Resume Template
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
          Select a template that best showcases your skills and experience
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {templateImages.map(template => (
            <div
              key={template.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-shadow duration-300 ${
                selectedTemplate === template.id ? 'shadow-2xl border-2 border-blue-500 dark:border-blue-400' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <img
                src={template.url}
                alt={template.name}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedTemplate}
            className={`px-6 py-3 rounded-lg font-medium ${
              selectedTemplate
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-700 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default TemplateSelectionPage
