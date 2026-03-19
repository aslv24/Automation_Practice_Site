"use client"

import { useState } from "react"

export default function DragDrop() {

  const [dropped, setDropped] = useState(false)

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">

      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        🖱️ Drag & Drop
      </h2>

      <div className="flex gap-6 items-center">

        <div
          draggable
          onDragStart={(e) => e.dataTransfer.setData("text", "drag")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg cursor-grab active:cursor-grabbing"
        >
          Drag Me
        </div>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => setDropped(true)}
          className={`px-6 py-6 rounded-lg w-40 text-center border-2 transition
            ${dropped
              ? "bg-green-100 border-green-500"
              : "bg-gray-100 border-dashed border-gray-400"}`}
        >
          {dropped ? "Dropped ✅" : "Drop Here"}
        </div>

      </div>

    </div>
  )
}