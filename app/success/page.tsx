'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="text-6xl mb-4">✓</div>
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      
      <p className="text-gray-600 mb-6">
        Thank you for your purchase! Check your email for:
      </p>

      <ul className="text-left space-y-3 mb-8 text-gray-700">
        <li className="flex items-center">
          <span className="text-green-600 mr-3 font-bold">✓</span>
          Welcome email with access instructions
        </li>
        <li className="flex items-center">
          <span className="text-green-600 mr-3 font-bold">✓</span>
          Course PDF download link
        </li>
        <li className="flex items-center">
          <span className="text-green-600 mr-3 font-bold">✓</span>
          Account access and next steps
        </li>
      </ul>

      {sessionId && (
        <p className="text-sm text-gray-500 mb-6">
          Session ID: {sessionId}
        </p>
      )}

      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  )
}
