interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  priceId: string
  onCheckout: () => void
  loading: boolean
  isPopular: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  onCheckout,
  loading,
  isPopular,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg p-8 transition transform hover:scale-105 ${
        isPopular
          ? 'border-2 border-blue-600 bg-blue-50 shadow-lg'
          : 'border border-gray-200 bg-white'
      }`}
    >
      {isPopular && (
        <div className="mb-4 inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600 ml-2">one-time</span>
      </div>

      <button
        onClick={onCheckout}
        disabled={loading}
        className={`w-full py-3 px-6 rounded-lg font-semibold mb-6 transition ${
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Processing...' : 'Get Started'}
      </button>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-600 mr-3 font-bold">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
