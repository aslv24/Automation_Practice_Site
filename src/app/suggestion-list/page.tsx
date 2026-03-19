"use client"

import Link from "next/link"
import StaticSuggestion from "@/components/modules/suggestion/StaticSuggestion"
import DynamicSuggestion from "@/components/modules/suggestion/DynamicSuggestion"

export default function SuggestionListPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Suggestion List Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice auto suggestion handling
      </p>

      <Link href="/">
        <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">

        <StaticSuggestion />
        <DynamicSuggestion />

      </div>

    </div>
  )
}