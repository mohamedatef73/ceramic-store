"use client"
import { useState } from 'react'
import RootLayout from '../app/layout'

interface FormData {
  name: string
  email: string
}

interface FormErrors {
  name?: string
  email?: string
}

export default function FormValidation() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const validate = () => {
    const errors: FormErrors = {}

    if (!formData.name) {
      errors.name = 'Name is required'
    }

    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid'
    }

    return errors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validate()

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
    } else {
      setFormErrors({})
      setIsSubmitted(true)
    }
  }

  return (
    <RootLayout>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">User Form</h1>
        {isSubmitted ? (
          <p className="text-green-500">data submetted successfuly</p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border ${
                  formErrors.name ? 'border-red-500' : 'border-gray-300'
                } rounded`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                } rounded`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
    </RootLayout>
  )
}
