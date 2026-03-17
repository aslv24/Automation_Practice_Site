"use client"

import SimpleAlert from "@/components/modules/alerts/SimpleAlert"
import ConfirmAlert from "@/components/modules/alerts/ConfirmAlert"
import PromptAlert from "@/components/modules/alerts/PromptAlert"

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">

      <h1 className="text-3xl font-semibold text-center mb-10">
        Alerts Practice Page
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <SimpleAlert />
        <ConfirmAlert />
        <PromptAlert />
      </div>

    </div>
  )
}