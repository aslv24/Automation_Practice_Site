"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa"

export default function LeadPopup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")

  const [open, setOpen] = useState(false)

  const [emailError, setEmailError] = useState("")
  const [mobileError, setMobileError] = useState("")

  // ✅ Fix hydration issue (open after mount)
  useEffect(() => {
    setOpen(true)
  }, [])

  const validateEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(value)
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)

    if (value && !validateEmail(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  const handleMobileChange = (value: string) => {
    const onlyNumbers = value.replace(/[^0-9]/g, "")
    setMobile(onlyNumbers)

    if (onlyNumbers.length > 0 && onlyNumbers.length !== 10) {
      setMobileError("Mobile number must contain 10 digits")
    } else {
      setMobileError("")
    }
  }

  const isFormValid =
    name.trim().length > 0 &&
    validateEmail(email) &&
    mobile.length === 10

  const handleSubmit = () => {
    console.log({ name, email, mobile })

    // TODO: API call here

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg rounded-2xl p-8 bg-white shadow-xl [&>button]:text-gray-400 [&>button:hover]:text-red-500">

        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-semibold text-gray-800">
            Join Selenium Practice
          </DialogTitle>

          <p className="text-center text-gray-500 mt-2 text-sm">
            Register to explore real automation scenarios
          </p>
        </DialogHeader>

        <div className="space-y-5 mt-6">

          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500">
            <FaUser className="text-gray-400 mr-3 text-lg"/>

            <Input
              id="name"
              placeholder="Enter your name"
              className="border-0 focus-visible:ring-0 text-base"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500">
              <FaEnvelope className="text-gray-400 mr-3 text-lg"/>

              <Input
                id="email"
                placeholder="Enter your email"
                className="border-0 focus-visible:ring-0 text-base"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleEmailChange(e.target.value)
                }
              />
            </div>

            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500">
              <FaPhone className="text-gray-400 mr-3 text-lg"/>

              <Input
                id="mobile"
                placeholder="Enter your mobile number"
                className="border-0 focus-visible:ring-0 text-base"
                value={mobile}
                maxLength={10}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleMobileChange(e.target.value)
                }
              />
            </div>

            {mobileError && (
              <p className="text-red-500 text-sm mt-1">{mobileError}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            id="submitBtn"
            disabled={!isFormValid}
            className="w-full text-base py-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
            onClick={handleSubmit}
          >
            Register Now
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  )
}