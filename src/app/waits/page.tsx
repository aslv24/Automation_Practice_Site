"use client"

import Link from "next/link"

import ImplicitWait from "@/components/modules/waits/ImplicitWait"
import ExplicitWait from "@/components/modules/waits/ExplicitWait"

export default function WaitsPage() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Waits Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice implicit & explicit waits in Selenium
      </p>

      <Link href="/">
        <button className="bg-gray-800 text-white px-5 py-2 rounded-lg">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">

        <ImplicitWait />
        <ExplicitWait />

      </div>

    </div>
  )
}