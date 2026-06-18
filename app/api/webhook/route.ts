import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(request: NextRequest) {
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  try {
    const body = await request.text()

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    )

    // Handle different event types
    switch (event.type) {
      case 'charge.succeeded':
        console.log('✓ Payment succeeded:', event.data.object)
        // TODO: Send confirmation email, store purchase in database
        break

      case 'charge.failed':
        console.log('✗ Payment failed:', event.data.object)
        // TODO: Send failure notification
        break

      case 'charge.refunded':
        console.log('↩ Refund processed:', event.data.object)
        // TODO: Revoke access or handle refund
        break

      default:
        console.log('Event type:', event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
