"use client"

import Link from "next/link"
import SimpleAlert from "@/components/modules/alerts/SimpleAlert"
import ConfirmAlert from "@/components/modules/alerts/ConfirmAlert"
import PromptAlert from "@/components/modules/alerts/PromptAlert"

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">

      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-800">
          Alerts Practice Page
        </h1>

        <p className="text-gray-500 mt-2 mb-4">
          Practice handling different types of alerts for Selenium automation
        </p>

        {/* 🔥 Back to Home Button */}
        <Link href="/">
          <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
            ← Back to Dashboard
          </button>
        </Link>
      </div>

      {/* Alerts Cards */}
      <div className="max-w-3xl mx-auto space-y-6">
        <SimpleAlert />
        <ConfirmAlert />
        <PromptAlert />
      </div>

    </div>
  )
}