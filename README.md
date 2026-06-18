# AI for Wise Guys

A complete sales and course delivery platform built with Next.js 14, Stripe, and Tailwind CSS.

**Tagline:** Simple Starts to Super Skills – AI Made Easy for All Ages

## Features

✓ Beautiful, responsive sales landing page  
✓ Two-tier pricing ($6.99 Simple, $12.99 Complex)  
✓ Stripe Checkout integration  
✓ Webhook handling for payment events  
✓ Success confirmation page  
✓ Ready for deployment on Render  

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS
- **Payments:** Stripe
- **Deployment:** Render

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/d13dmurphy/polsia-app.git
cd polsia-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Stripe credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with:
- Your Stripe Publishable Key
- Your Stripe Secret Key
- Your Stripe Webhook Secret
- Your Stripe Product Price IDs

### 4. Create Stripe Products

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Create two one-time payment products:
   - **Simple Tier:** $6.99 (get the Price ID)
   - **Complex Tier:** $12.99 (get the Price ID)
3. Add the Price IDs to `.env.local`

### 5. Run Locally
```bash
npm run dev
```

Visit `http://localhost:3000`

## Testing Stripe Checkout

Use these test card numbers:

**Success:**
```
Card: 4242 4242 4242 4242
Exp: 12/25
CVC: 123
```

**Decline:**
```
Card: 4000 0000 0000 0002
Exp: 12/25
CVC: 123
```

## Deploying to Render

### 1. Connect GitHub Repository
- Go to [Render Dashboard](https://render.com)
- Create a new Web Service
- Connect your GitHub repository

### 2. Add Environment Variables
In Render dashboard, add all variables from `.env.local.example`:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SIMPLE_PRICE_ID`
- `NEXT_PUBLIC_COMPLEX_PRICE_ID`

### 3. Deploy
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`
- Click Deploy

### 4. Set Up Stripe Webhook

After deployment, update your Stripe webhook:

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://YOUR_RENDER_URL/api/webhook`
3. Events to listen:
   - `charge.succeeded`
   - `charge.failed`
   - `charge.refunded`
4. Copy Webhook Secret to `STRIPE_WEBHOOK_SECRET` in Render

## Project Structure

```
.
├── app/
│   ├── page.tsx              # Home page with pricing
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── success/
│   │   └── page.tsx          # Success page after payment
│   └── api/
│       ├── checkout/         # Stripe checkout session creation
│       └── webhook/          # Stripe webhook handler
├── components/
│   ├── Hero.tsx              # Hero section
│   ├── Features.tsx          # Features section
│   └── PricingCard.tsx       # Pricing card component
├── .env.local.example        # Environment variables template
├── render.yaml               # Render deployment config
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Next Steps

1. Add your custom sales copy to components
2. Implement email confirmation (SendGrid, Resend, etc.)
3. Add database integration for order storage
4. Create admin dashboard for viewing purchases
5. Upload course PDF and capstone project files

## Support

For issues or questions, check the [Stripe Documentation](https://stripe.com/docs) or [Next.js Documentation](https://nextjs.org/docs).

## License

MIT
