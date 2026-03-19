"use client"

import Link from "next/link"

import NewTab from "@/components/modules/windows/NewTab"
import NewWindow from "@/components/modules/windows/NewWindow"
import MultipleWindows from "@/components/modules/windows/MultipleWindows"

export default function WindowsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Windows Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice handling tabs and windows for Selenium automation
      </p>

      <Link href="/">
        <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">
        <NewTab />
        <NewWindow />
        <MultipleWindows />
      </div>

    </div>
  )
}