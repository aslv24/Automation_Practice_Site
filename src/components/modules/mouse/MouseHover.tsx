"use client"

import { useState } from "react"

export default function MouseHover() {

  const [show, setShow] = useState(false)

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">

      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        🖱️ Mouse Hover
      </h2>

      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg text-center cursor-pointer transition hover:scale-105"
      >
        Hover Over Me
      </div>

      {show && (
        <p className="mt-3 text-blue-600 font-medium">
          Hover detected ✅
        </p>
      )}

    </div>
  )
}