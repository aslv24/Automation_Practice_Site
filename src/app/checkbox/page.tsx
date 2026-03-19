"use client"

import Link from "next/link"
import { useState } from "react"

import SingleCheckbox from "@/components/modules/checkbox/SingleCheckbox"
import MultipleCheckbox from "@/components/modules/checkbox/MultipleCheckbox"
import SelectAllCheckbox from "@/components/modules/checkbox/SelectAllCheckbox"

export default function CheckboxPage() {

  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false
  })

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Checkbox Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice handling checkboxes for Selenium automation
      </p>

      <Link href="/">
        <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">

        <SingleCheckbox />

        <MultipleCheckbox options={options} setOptions={setOptions} />

        <SelectAllCheckbox setOptions={setOptions} />

      </div>

    </div>
  )
}