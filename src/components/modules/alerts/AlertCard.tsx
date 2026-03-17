"use client"

export default function AlertCard({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-medium mb-4">{title}</h2>

      {/* ✅ THIS LINE IS MISSING IN YOUR CODE */}
      {children}

    </div>
  )
}