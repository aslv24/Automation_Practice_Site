"use client"

import Link from "next/link"
import { useState } from "react"

import SimpleDropdown from "@/components/modules/dropdown/SimpleDropdown"
import MultiDropdown from "@/components/modules/dropdown/MultiDropdown"
import DynamicDropdown from "@/components/modules/dropdown/DynamicDropdown"

export default function DropdownPage() {

  const [selected, setSelected] = useState("")
  const [multiSelected, setMultiSelected] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Dropdown Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice handling dropdowns for Selenium automation
      </p>

      <Link href="/">
        <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">

        <SimpleDropdown selected={selected} setSelected={setSelected} />

        <MultiDropdown multiSelected={multiSelected} setMultiSelected={setMultiSelected} />

        <DynamicDropdown />

      </div>

    </div>
  )
}