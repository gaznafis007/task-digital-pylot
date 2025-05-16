import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Frontend Developer Assignment | Digital Pylot
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Digital Pylot Frontend Developer Assignment. This task involves building a user management interface with a paginated data table. Click the button below to view the user list, which includes expandable rows to display additional details like addresses and phone numbers.
        </p>
        <Link href="/users">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            View Users
          </button>
        </Link>
      </div>
    </div>
  )
}