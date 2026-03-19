"use client"

import { useState } from "react"
import { countries } from "@/data/countries"

export default function StaticSuggestion() {

  const [input, setInput] = useState("")
  const [filtered, setFiltered] = useState<typeof countries>([])

  const handleChange = (value: string) => {
    setInput(value)

    const result = countries.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.code.includes(value)
    )

    setFiltered(value ? result : [])
  }

  const handleSelect = (item: any) => {
    setInput(`${item.name} (${item.code})`)
    setFiltered([])
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border">

      <h2 className="text-lg font-semibold mb-4">
        Suggestion List (Countries)
      </h2>

      <input
        type="text"
        value={input}
        placeholder="Search country..."
        onChange={(e) => handleChange(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      {filtered.length > 0 && (
        <ul className="border mt-2 rounded max-h-40 overflow-auto">

          {filtered.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer flex justify-between"
            >
              <span>{item.name}</span>
              <span className="text-gray-500">{item.code}</span>
            </li>
          ))}

        </ul>
      )}

    </div>
  )
}