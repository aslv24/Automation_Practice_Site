"use client"

type Props = {
  options: {
    option1: boolean
    option2: boolean
    option3: boolean
  }
  setOptions: React.Dispatch<React.SetStateAction<any>>
}

export default function MultipleCheckbox({ options, setOptions }: Props) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setOptions((prev: any) => ({
      ...prev,
      [name]: checked
    }))
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100">

      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Multiple Checkboxes
      </h2>

      <div className="space-y-3">

        {["option1", "option2", "option3"].map((opt, index) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name={opt}
              checked={options[opt as keyof typeof options]}
              onChange={handleChange}
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-gray-700">
              Option {index + 1}
            </span>
          </label>
        ))}

      </div>

    </div>
  )
}