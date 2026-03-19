"use client"

import { useState, useRef, useEffect } from "react"
import { countries } from "@/data/countries"

export default function StaticSuggestion() {

  const [input, setInput] = useState("")
  const [filtered, setFiltered] = useState<typeof countries>([])
  const [showDropdown, setShowDropdown] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)

  // ✅ Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const handleFocus = () => {
    setFiltered(countries)
    setShowDropdown(true)
  }

  const handleChange = (value: string) => {
    setInput(value)

    const result = countries.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.code.includes(value)
    )

    setFiltered(result)
    setShowDropdown(true)
  }

  const handleSelect = (item: any) => {
    setInput(`${item.name} (${item.code})`)
    setShowDropdown(false)
  }

  return (
    <div ref={wrapperRef} className="bg-white p-6 rounded-2xl shadow-md border relative">

      <h2 className="text-lg font-semibold mb-4">
        Dropdown Suggestion (Countries)
      </h2>

      <input
        type="text"
        value={input}
        placeholder="Select country..."
        onFocus={handleFocus}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      {showDropdown && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded max-h-48 overflow-auto z-10 shadow">

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