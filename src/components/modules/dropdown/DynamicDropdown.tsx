"use client"

import { useState } from "react"

export default function DynamicDropdown() {

  const [options, setOptions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const loadOptions = () => {
    setLoading(true)

    setTimeout(() => {
      setOptions([
        "Selenium WebDriver",
        "Playwright Automation",
        "Cypress Testing",
        "API Testing (Postman)",
        "Performance Testing (JMeter)",
        "Security Testing (OWASP ZAP)",
        "CI/CD (Jenkins)",
        "Docker & Kubernetes",
        "AWS Cloud Testing"
      ])
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100">

      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Dynamic Dropdown (Wait Scenario)
      </h2>

      <button
        onClick={loadOptions}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-3 transition"
      >
        Load Options
      </button>

      {loading && (
        <p className="text-gray-500 animate-pulse">
          Loading options...
        </p>
      )}

      {!loading && options.length > 0 && (
        <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

          <option value="">-- Select Topic --</option>

          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}

        </select>
      )}

    </div>
  )
}