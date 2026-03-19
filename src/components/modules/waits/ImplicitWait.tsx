"use client"

import { useEffect, useState } from "react"

export default function ImplicitWait() {

  const [showFields, setShowFields] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowFields(true)
    }, 3000) // 3 sec delay
  }, [])

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border">

      <h2 className="text-lg font-semibold mb-4 text-blue-600">
        Implicit Wait Scenario
      </h2>

      {!showFields ? (
        <p className="text-gray-500">Loading fields...</p>
      ) : (
        <div className="space-y-3">

          <input
            id="nameField"
            placeholder="Enter Name"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            id="emailField"
            placeholder="Enter Email"
            className="w-full border px-3 py-2 rounded"
          />

        </div>
      )}

    </div>
  )
}