"use client"

import { useEffect } from "react"

export default function NotificationPermission() {
  useEffect(() => {
    if ("Notification" in window) {

      if (Notification.permission === "granted") {
        alert("Permission already granted ✅")
      } 
      else if (Notification.permission === "denied") {
        alert("Permission blocked ❌ Reset in browser settings")
      } 
      else {
        Notification.requestPermission()
      }

    }
  }, [])

  return null
}