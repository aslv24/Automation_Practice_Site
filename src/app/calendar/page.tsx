"use client"

import Link from "next/link"
import { useState } from "react"

import DateInput from "@/components/modules/calendar/DateInput"
import CalendarTable from "@/components/modules/calendar/CalendarTable"
import WebTable from "@/components/modules/calendar/WebTable"

export default function CalendarPage() {

  const [selectedDate, setSelectedDate] = useState("")

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Calendar Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice calendar, date picker & table handling
      </p>

      <Link href="/">
        <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">

        <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

        <CalendarTable selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

        <WebTable />

      </div>

    </div>
  )
}