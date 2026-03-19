"use client"

import { useEffect, useState } from "react"

export default function ExplicitWait() {

  const [showButton, setShowButton] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
    }, 4000) // 4 sec delay
  }, [])

  const handleClick = () => {
    setMessage("Button Clicked Successfully ✅")
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border">

      <h2 className="text-lg font-semibold mb-4 text-green-600">
        Explicit Wait Scenario
      </h2>

      {!showButton ? (
        <p className="text-gray-500">Waiting for button...</p>
      ) : (
        <button
          id="delayedButton"
          onClick={handleClick}
          className="bg-green-500 text-white px-5 py-2 rounded"
        >
          Click Me
        </button>
      )}

      {message && (
        <p className="mt-3 text-green-600 font-medium">{message}</p>
      )}

    </div>
  )
}