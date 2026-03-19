"use client"

import { useEffect } from "react"

export default function NotificationPermission() {

  useEffect(() => {

    const asked = localStorage.getItem("notificationAsked")

    if (!asked && "Notification" in window) {

      Notification.requestPermission().then((permission) => {

        if (permission === "granted") {
          console.log("Notification allowed ✅")
        } 
        else if (permission === "denied") {
          console.log("Notification blocked ❌")
        }

      })

      localStorage.setItem("notificationAsked", "true")
    }

  }, [])

  return null
}