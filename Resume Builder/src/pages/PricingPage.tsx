import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'One resume template',
      'GitHub repository integration',
      'Monthly updates',
      'Basic sharing options',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: 'per month',
    features: [
      'All Free features',
      'Multiple resume templates',
      'Weekly updates',
      'Custom domain',
      'Analytics dashboard',
      'Priority support',
    ],
    cta: 'Subscribe Now',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$29',
    period: 'per month',
    features: [
      'All Pro features',
      'Team management',
      'Daily updates',
      'API access',
      'Custom branding',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

function PricingPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted
                  ? 'border-2 border-blue-500 dark:border-blue-400 transform scale-105'
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="p-8 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/auth"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Need something different?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Contact us for custom enterprise solutions tailored to your organization
          </p>
          <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
