'use client'

import { useState } from 'react'
import PricingCard from '@/components/PricingCard'
import Hero from '@/components/Hero'
import Features from '@/components/Features'

export default function Home() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async (priceId: string) => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      const data = await response.json()
      if (data.sessionId) {
        // Redirect to Stripe Checkout
        window.location.href = data.redirectUrl
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to initiate checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <Hero />
      <Features />
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Choose the right plan for your learning journey
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Simple Tier */}
            <PricingCard
              name="Simple Tier"
              price="$6.99"
              description="Perfect for getting started"
              features={[
                'Full Course Access',
                'PDF Download',
                'Lifetime Access',
                'Email Support',
              ]}
              priceId={process.env.NEXT_PUBLIC_SIMPLE_PRICE_ID || ''}
              onCheckout={() => handleCheckout(process.env.NEXT_PUBLIC_SIMPLE_PRICE_ID || '')}
              loading={loading}
              isPopular={false}
            />

            {/* Complex Tier */}
            <PricingCard
              name="Complex Tier"
              price="$12.99"
              description="Get everything + exclusive bonus"
              features={[
                'Full Course Access',
                'PDF Download',
                'Capstone Project',
                'Lifetime Access',
                'Priority Email Support',
                'Certificate of Completion',
              ]}
              priceId={process.env.NEXT_PUBLIC_COMPLEX_PRICE_ID || ''}
              onCheckout={() => handleCheckout(process.env.NEXT_PUBLIC_COMPLEX_PRICE_ID || '')}
              loading={loading}
              isPopular={true}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              ✓ 30-Day Money-Back Guarantee
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Not happy? Get a full refund, no questions asked.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
