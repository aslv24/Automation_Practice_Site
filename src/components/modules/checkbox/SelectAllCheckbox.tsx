"use client"

type Props = {
  setOptions: React.Dispatch<React.SetStateAction<any>>
}

export default function SelectAllCheckbox({ setOptions }: Props) {

  const handleSelectAll = (value: boolean) => {
    setOptions({
      option1: value,
      option2: value,
      option3: value
    })
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100">

      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Select / Unselect All
      </h2>

      <div className="flex gap-4">

        <button
          onClick={() => handleSelectAll(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition font-medium"
        >
          Select All
        </button>

        <button
          onClick={() => handleSelectAll(false)}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition font-medium"
        >
          Unselect All
        </button>

      </div>

    </div>
  )
}