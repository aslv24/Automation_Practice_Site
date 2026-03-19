"use client"

import { useState } from "react"

export default function BasicForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    course: "",
    agree: false
  })

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

      <h2 className="text-lg font-semibold mb-4">📝 Basic Form</h2>

      <div className="space-y-4">

        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg mt-1"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="text-sm text-gray-600">Gender</label>
          <div className="flex gap-4 mt-1">
            <label><input type="radio" name="gender" value="male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="female" onChange={handleChange} /> Female</label>
          </div>
        </div>

        {/* Course */}
        <div>
          <label className="text-sm text-gray-600">Course</label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg mt-1"
          >
            <option value="">Select Course</option>
            <option value="selenium">Selenium</option>
            <option value="playwright">Playwright</option>
          </select>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          Accept Terms
        </label>

      </div>

      {/* Output */}
      <div className="mt-4 bg-gray-100 p-3 rounded text-sm">
        <strong>Filled Data:</strong>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>

    </div>
  )
}