"use client"

import Link from "next/link"
import { useState } from "react"

import SingleRadio from "@/components/modules/radiobutton/SingleRadio"
import GroupRadio from "@/components/modules/radiobutton/GroupRadio"

export default function RadioButtonPage() {

  const [selected, setSelected] = useState("")

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Radio Button Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice handling radio buttons for Selenium automation
      </p>

      <Link href="/">
        <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">

        <SingleRadio />

        <GroupRadio selected={selected} setSelected={setSelected} />

      </div>

    </div>
  )
}