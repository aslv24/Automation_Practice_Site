"use client";

import { useState } from "react";

export default function ValidationForm() {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

 const handleSubmit = async () => {
  setError("");
  setSuccess("");

  if (!name || !email) {
    setError("All fields are required");
    return;
  }

  if (!email.includes("@")) {
    setError("Invalid email format");
    return;
  }

  try {
    // ✅ Fake API call (simulate server delay)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSuccess("Form submitted successfully ✅");

    // Reset after success
    setName("");
    setEmail("");

  } catch (err) {
    setError("Something went wrong");
  }
};

  return (
    <div className="p-5 max-w-md mx-auto border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Validation Form</h2>

      {/* FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {/* Name */}
        <div className="mb-3">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full px-3 py-2 rounded"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full px-3 py-2 rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>

      {/* Messages */}
      {error && <p className="text-red-500 mt-3">{error}</p>}
      {success && <p className="text-green-600 mt-3">{success}</p>}
    </div>
  );
}