"use client"

import Link from "next/link"

import ClickActions from "@/components/modules/mouse/ClickActions"
import MouseHover from "@/components/modules/mouse/MouseHover"
import DragDrop from "@/components/modules/mouse/DragDrop"
import Slider from "@/components/modules/mouse/Slider"

export default function MousePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-2">
        Mouse Actions Practice Page
      </h1>

      <p className="text-gray-600 mb-4">
        Practice mouse interactions for Selenium automation
      </p>

      <Link href="/">
        <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          ← Back to Dashboard
        </button>
      </Link>

      <div className="w-full max-w-2xl mt-6 space-y-6">
        <ClickActions />
        <MouseHover />
        <DragDrop />
        <Slider />
      </div>

    </div>
  )
}