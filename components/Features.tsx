export default function Features() {
  const features = [
    {
      title: 'For Everyone',
      description: 'Designed specifically for teenagers and adults 40+. No coding experience needed.',
      icon: '👥',
    },
    {
      title: 'Comprehensive Curriculum',
      description: 'From AI basics to advanced applications. Learn at your own pace with lifetime access.',
      icon: '📚',
    },
    {
      title: 'Practical Projects',
      description: 'Apply your knowledge with real-world projects. Get a certificate upon completion.',
      icon: '🎯',
    },
    {
      title: '30-Day Guarantee',
      description: 'Not satisfied? Get your money back, no questions asked. We stand behind our course.',
      icon: '💰',
    },
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose AI for Wise Guys?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
